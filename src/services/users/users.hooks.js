const { authenticate } = require("@feathersjs/authentication").hooks;
const verifyHooks = require("feathers-authentication-management").hooks;
const accountService = require("../authmanagement/notifier");
const commonHooks = require("feathers-hooks-common");

const {
  hashPassword,
  protect
} = require("@feathersjs/authentication-local").hooks;

const addUserRoleToUsers = require("../../hooks/add-user-role-to-users");

const getUserRoles = require("../../hooks/get-user-roles");

const getNearByBidders = require('../../hooks/get-near-by-bidders');

const clearQueryString = require('../../hooks/clear-query-string');

module.exports = {
  before: {
    all: [],
    find: [authenticate("jwt"), clearQueryString()],
    get: [authenticate("jwt")],
    create: [
      hashPassword("password"),
      verifyHooks.addVerification(),
      addUserRoleToUsers()
    ],
    update: [commonHooks.disallow("external")],
    patch: [
      commonHooks.iff(
        commonHooks.isProvider("external"),
        commonHooks.preventChanges(
          "isVerified",
          "verifyToken",
          "verifyShortToken",
          "verifyExpires",
          "verifyChanges",
          "resetToken",
          "resetShortToken",
          "resetExpires"
        ),
        hashPassword("password"),
        authenticate("jwt")
      )
    ],
    remove: [authenticate("jwt")]
  },

  after: {
    all: [
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect("password"),
      protect("securityAnswer")
    ],
    find: [getNearByBidders()],
    get: [getUserRoles()],
    create: [
      context => {
        accountService(context.app).notifier(
          'resendVerifySignup',
          context.result
        );
      },
      verifyHooks.removeVerification()
    ],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
