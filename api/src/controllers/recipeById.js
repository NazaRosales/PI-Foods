const axios = require("axios");
const { Recipe } = require("../db.js");
const getRecipeById = async (id) => {
const {URL_API, API_KEY} = process.env;
  if(typeof(id) === "number"){
    const {data} = await axios(
      `${URL_API}${id}/information?apiKey=${API_KEY}`
    )    
    return({
      id: data.id,
      title: data.title,
      summary: data.summary.replace(/<[^>]+>/g, ''), // HTML tags in the summary
      healthScore: data.healthScore,
      image: data.image,
      dishTypes: data.dishTypes,
      diet: data.diets,
      //Formating steps in recipe
      steps: data.analyzedInstructions[0].steps?.map((element, index) => {
        return `${index + 1} : ${element['step']}`
    }).join(' ')
    });

  } else {
    return await Recipe.findByPk(id)
  }
};

module.exports = getRecipeById;
