const users = require('./users/users.service.js');
const categories = require('./categories/categories.service.js');
const jobs = require('./jobs/jobs.service.js');
const bids = require('./bids/bids.service.js');
const userRoles = require('./user-roles/user-roles.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(categories);
  app.configure(jobs);
  app.configure(bids);
  app.configure(userRoles);
};
