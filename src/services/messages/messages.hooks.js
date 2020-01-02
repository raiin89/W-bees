const { authenticate } = require('@feathersjs/authentication').hooks;

const populateMessagesWithUserDetails = require('../../hooks/populate-messages-with-user-details');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [populateMessagesWithUserDetails()],
    get: [populateMessagesWithUserDetails()],
    create: [populateMessagesWithUserDetails()],
    update: [populateMessagesWithUserDetails()],
    patch: [populateMessagesWithUserDetails()],
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
