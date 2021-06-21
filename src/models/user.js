"use strict";
const { Model } = require("sequelize");
const { argon2id } = require("argon2");

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

  User.addHook("beforeSave", "hashPassword", (user, options) => {
    try {
      const hash = await argon2id.hash(user.password);
      user.password = hash;
    } catch (error) {
      throw Error("Error trying to encrypt password");
    }
  });
  return User;
};
