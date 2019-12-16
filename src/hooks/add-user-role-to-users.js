// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const { app, data } = context;
    const roleDetails = await app.service('user-roles').find({
      query: {
        type: data.role
      }
    });
    console.log(roleDetails)
    context.data.userRoleId = roleDetails[0].id;
    return context;
  };
};
