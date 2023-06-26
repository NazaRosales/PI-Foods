const { Recipe } = require("../db");
const { API_KEY, URL_API } = process.env;
const axios = require("axios");

const getHome = async () => {
  const dbRecipes = await Recipe.findAll();
  let apiRecipes = [];

  try {
    const { data } = await axios.get(
      `${URL_API}complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=10`
    );
    const { results } = data;
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
    }
  } catch (error) {
    console.log({error: error.message});
    return dbRecipes; 
  }
  return [...dbRecipes, ...apiRecipes];
};

module.exports = getHome;
