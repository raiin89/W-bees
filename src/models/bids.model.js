// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const bids = sequelizeClient.define('bids', {
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('accepted', 'declined', 'pending'),
      defaultValue: 'pending'
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  bids.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    bids.belongsTo(models.users, {
      foreignKey: 'createdBy',
      onDelete: 'CASCADE'
    });
    bids.belongsTo(models.jobs, {
      foreignKey: 'jobId',
      onDelete: 'CASCADE'
    });
  };

  return bids;
};
