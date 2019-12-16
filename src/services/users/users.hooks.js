const { authenticate } = require('@feathersjs/authentication').hooks;

const {
  hashPassword, protect
} = require('@feathersjs/authentication-local').hooks;

const addUserRoleToUsers = require('../../hooks/add-user-role-to-users');

const getUserRoles = require('../../hooks/get-user-roles');

module.exports = {
  before: {
    all: [],
    find: [ authenticate('jwt') ],
    get: [ ],
    create: [hashPassword('password'), addUserRoleToUsers()],
    update: [ hashPassword('password'),  authenticate('jwt') ],
    patch: [ hashPassword('password'),  authenticate('jwt') ],
    remove: [ authenticate('jwt') ]
  },

  after: {
    all: [
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password')
    ],
    find: [],
    get: [getUserRoles()],
    create: [],
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
