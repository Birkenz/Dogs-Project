const axios = require("axios");
const { getAllDogsData } = require("../controllers/dogsController");

const getAllDogs = async (req, res) => {
  try {
    const dogs = await getAllDogsData("BJa4kxc4X");

    res.json(dogs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getAllDogs;
