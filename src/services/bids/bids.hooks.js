const { authenticate } = require('@feathersjs/authentication').hooks;

const addCreatedByHook = require('../../hooks/add-created-by-hook');

const attachBidderDetailsToBids = require('../../hooks/attach-bidder-details-to-bids');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [addCreatedByHook()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [attachBidderDetailsToBids()],
    get: [],
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
