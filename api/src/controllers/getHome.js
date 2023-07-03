const { Recipe } = require("../db");
const { API_KEY, URL_API } = process.env;
const axios = require("axios");

const getHome = async () => {
  const dbRecipes = await Recipe.findAll();
  let apiRecipes = [];

  try {
    const { data } = await axios.get(
      `${URL_API}complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
    );
    const { results } = data;
    if (results.length) {
      apiRecipes = results.map((element) => {
        const recipe = {
          id: element.id,
          title: element.title,
          healthScore: element.healthScore,
          summary: element.summary.replace(/<[^>]+>/g, ""),
          image: element.image,
          diet: element.diets ? element.diets : "steps not found",
        };
        if(element.vegetarian) recipe.diet.push("vegetarian")
        return recipe;
      });
    }
  } catch (error) {
    if(dbRecipes.length){
      return dbRecipes;
    }
    throw Error("No recipes available");
  }
  return [...dbRecipes, ...apiRecipes];
};

module.exports = getHome;
