const { API_KEY } = process.env;
const axios = require("axios");
const URL = "http://api.thedogapi.com/v1/breeds";
const IMAGES_URL = "https://api.thedogapi.com/v1/images";

const getProm = (data) => {
  let param1 = +data.slice(0, 2).trim();
  let param2 = +data.slice(4).trim();
  let average = (param1 + param2) / 2;
  return average;
};
const getDogImage = async (id) => {
  try {
    const response = await axios(`${IMAGES_URL}/${id}?api_key=${API_KEY}`);
    const responseData = response.data;
    return responseData.url;
  } catch (error) {
    throw error;
  }
};

const getAllDogsData = async () => {
  try {
    const response = await axios(`${URL}?api_key=${API_KEY}`);
    const APIdata = response.data;
    const dogsAPIData = await Promise.all(
      APIdata.map( (dogs) => {
        const imageID = dogs.reference_image_id;
        const imageUrl = getDogImage(imageID);
        console.log(imageUrl)

        return {
          id: dogs.id,
          name: dogs.name,
          average_weight: getProm(dogs.weight.metric),
          average_height: getProm(dogs.height.metric),
          life_span: dogs.life_span,
          imageID,
          imageUrl,
        };
      })
    );
    return dogsAPIData;
  } catch (error) {
   
    throw error;
  }
};



module.exports = {
  getAllDogsData,
};
