const axios = require('axios');
const URL_API = process.env;
const API_KEY = process.env;
const getRecipeFromApi = async (id) => {
    /*
    ID's: 
    782585
    716426
    715497
    715415
    716406
    644387
    */
    const response = await axios(`http://localhost:8080/recipes/${id}/information?apiKey=${API_KEY}`)
    .then(response => {
      const data = response.data;
      const {title, image, summary, healthScore} = data;
      const {steps} = data.analyzedInstructions[0]
      return {title, image, summary, healthScore, steps}
    })
    .catch(error => {
      return {error}
    });
    return response;
};

module.exports = getRecipeFromApi;

