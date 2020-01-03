// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    let result = await Promise.all(
      context.result.map(async job => {
        const count = (await context.app.service('bids').find({ query: { jobId: job.id }})).length
        job.bids = count
        return job
      })
    )
    context.result = result
    return context;
  };
};
