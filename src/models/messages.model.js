// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const messages = sequelizeClient.define('messages', {
    messageText: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('sent', 'received', 'read'),
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
  messages.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    messages.belongsTo(models.users, {
      foreignKey: "sender",
      onDelete: "CASCADE"
    });
    messages.belongsTo(models.users, {
      foreignKey: "receiver",
      onDelete: "CASCADE"
    });
    messages.belongsTo(models.conversations, {
      foreignKey: "conversationId",
      onDelete: "CASCADE"
    });
  };

  return messages;
};
