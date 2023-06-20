const axios = require("axios");
const URL_API = process.env;
const API_KEY = process.env;
const { Recipe } = require("../db.js");
const getRecipeById = async (id) => {
/*
    ID's: 
    782585 716426 715497 715415 716406 644387
*/
  if(typeof(id) === "number"){
    const {data} = await axios(
      `http://localhost:8080/recipes/${id}/information?apiKey=${API_KEY}`
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
