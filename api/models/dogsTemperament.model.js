const sequelize = require("../db");
const { DataTypes } = require("sequelize");
const Temperament = require("./temperaments.models");
const Dog = require("./dogs.models");

const DogTemperament = sequelize.define(
  "dog_temperaments",
  {
    dogId: {
      type: DataTypes.INTEGER,
      reference: {
        model: Dog,
        key: "id",
      },
    },
    temperamentId: {
      type: DataTypes.INTEGER,
      reference: {
        model: Temperament,
        key: "id",
      },
    },
  },
  {
    timestamps: false,
  }
);

module.exports = DogTemperament;
