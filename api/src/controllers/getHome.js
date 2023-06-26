const { Recipe } = require("../db");
const { API_KEY, URL_API } = process.env;
const axios = require("axios");

const getHome = async () => {
  const dbRecipes = await Recipe.findAll();

  /*const { data } = await axios.get(
    `${URL_API}complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
  );
  const { results } = data;
  let apiRecipes = [];
  if (results.length) {
    apiRecipes = results.map((element) => {
      return {
        id: element.id,
        title: element.title,
        healthScore: element.healthScore,
        summary: element.summary.replace(/<[^>]+>/g, ""),
        image: element.image,
        diet: element.diets ? element.diets : "steps not found",
      };
    });
  }*/
  console.log(dbRecipes)
  return dbRecipes; /* [...dbRecipes, ...apiRecipes]; */
};

module.exports = getHome;
