// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    let result = [];
    result = await Promise.all(
      context.result.data.map(async user => {
        let details = await context.app.service('users').get(user.senderId)
        user.details = {
                      name: details.username,
                      email: details.email,
                      profilePic: details.profilePic,
                    }
        return user
      })
    )
    context.result = result
    return context;
  };
};
