"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");

function hashPassword(user) {
  const saltRounds = parseInt(process.env.SALT_ROUNDS);
  try {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(user.password, salt);
    user.password = hash;
  } catch (error) {
    throw Error(error);
  }
}

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Note, { as: "notes" });
    }
  }

  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  // Hooks
  User.addHook("beforeCreate", hashPassword);
  User.addHook("beforeBulkUpdate", (user) => hashPassword(user.attributes));

  return User;
};
