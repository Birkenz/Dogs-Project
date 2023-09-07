const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Temperament = sequelize.define(
  "temperaments",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
module.exports = Temperament;
