// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const haversine = require('haversine')
// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const sortedBidders = context.result.map(bidder => {
      const distance = haversine({...context.params.data}, { latitude: bidder.location.coordinates[0], longitude: bidder.location.coordinates[1] }, { unit: 'meter' })
      bidder.distance = distance
      return bidder
    })

    sortedBidders.sort((a,b)=>{
      if(a.distance < b.distance)
        return -1
      return 1
    })

    context.dispatch = sortedBidders
    return context;
  };
};
