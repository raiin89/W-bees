// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const conversations = sequelizeClient.define('conversations', {
    roomId: {
      type: DataTypes.STRING,
      allowNull: false
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
  conversations.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    conversations.belongsTo(models.users, {
      foreignKey: "senderId",
      onDelete: "CASCADE"
    });
    conversations.belongsTo(models.users, {
      foreignKey: "receiverId",
      onDelete: "CASCADE"
    });
  };

  return conversations;
};
