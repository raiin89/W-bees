const users = require('./users/users.service.js');
const categories = require('./categories/categories.service.js');
const jobs = require('./jobs/jobs.service.js');
const bids = require('./bids/bids.service.js');
const userRoles = require('./user-roles/user-roles.service.js');
const mailer = require('./mailer/mailer.service.js');
const authmanagement = require('./authmanagement/authmanagement.service.js');
const conversations = require('./conversations/conversations.service.js');
const messages = require('./messages/messages.service.js');
const media = require('./media/media.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(categories);
  app.configure(jobs);
  app.configure(bids);
  app.configure(userRoles);
  app.configure(mailer);
  app.configure(authmanagement);
  app.configure(conversations);
  app.configure(messages);
  app.configure(media);
};
