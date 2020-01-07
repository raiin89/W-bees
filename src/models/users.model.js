// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get("sequelizeClient");
  const users = sequelizeClient.define(
    "users",
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      zipcode: {
        type: DataTypes.STRING,
        allowNull: false
      },
      location: {
        type: DataTypes.GEOMETRY('POINT'),
        allowNull: false
      },
      isVerified: {
        type: DataTypes.BOOLEAN
      },
      verifyToken: {
        type: DataTypes.STRING
      },
      verifyExpires: {
        type: DataTypes.DATE
      },
      verifyChanges: {
        type: DataTypes.JSON
      },
      resetToken: {
        type: DataTypes.STRING
      },
      resetExpires: {
        type: DataTypes.DATE
      },
      profilePic: {
        type: DataTypes.STRING
      }
    },
    {
      timeStamps: true,
      paranoid: true,
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    }
  );

  // eslint-disable-next-line no-unused-vars
  users.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    users.belongsTo(models.user_roles, {
      foreignKey: "userRoleId",
      onDelete: "CASCADE"
    });
  };

  return users;
};
