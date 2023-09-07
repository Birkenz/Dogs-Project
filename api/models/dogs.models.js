const sequelize = require("../db");
const { DataTypes } = require("sequelize");
const Temperament = require('./temperaments.models')
const dogsTemprament = require('./dogsTemperament.model')

const Dog = sequelize.define("dogs", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  height_min: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  weight_min: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  height_max: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  weight_max: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  life_span: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  createdInDB: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
}, {
  timestamps: false
});

Dog.belongsToMany(Temperament, { through: dogsTemprament});
Temperament.belongsToMany(Dog, { through: dogsTemprament });

module.exports = Dog;
