// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const jobs = sequelizeClient.define('jobs', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('open', 'closed'),
      defaultValue: 'open'
    }
  }, {
    timestamps: true,
    paranoid: true,
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  jobs.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    jobs.belongsTo(models.users, {
      foreignKey: 'createdBy',
      onDelete: 'CASCADE'
    });
    jobs.belongsTo(models.categories, {
      foreignKey: 'categoryId',
      onDelete: 'CASCADE'
    });
  };

  return jobs;
};
