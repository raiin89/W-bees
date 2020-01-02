// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    let result = []
    result = await Promise.all(
      context.result.map(async bid => {
        let bidder = await context.app.service('users').get(bid.createdBy)
        bid.bidder = {
                      name: bidder.username,
                      email: bidder.email
                    }
        return bid
      })
    )
    context.result = result
    return context;
  };
};
