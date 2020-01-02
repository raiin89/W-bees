// Initializes the `conversations` service on path `/conversations`
const { Conversations } = require('./conversations.class');
const createModel = require('../../models/conversations.model');
const hooks = require('./conversations.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/conversations', new Conversations(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('conversations');

  service.hooks(hooks);
};
