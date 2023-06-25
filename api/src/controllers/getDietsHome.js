const { Recipe } = require("../db.js");
const { API_KEY, URL_API } = process.env;
const axios = require("axios");

const getDietsHome = async () => {
  const dbRecipes = await Recipe.findAll();
  const { data } = await axios.get(
    `${URL_API}complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
  );
  let arrRecipes = [];
  if (data.length) {
    arrRecipes = result.map((recipe) => {
      return {
        id: recipe?.id,
        title: recipe?.title,
        healthScore: recipe?.healthScore,
        summary: recipe?.summary.replace(/<[^>]+>/g, ""),
        image: recipe?.image,
        diets: recipe?.diets ? recipe?.diets : "steps not found",
      };
    });
  }
  return [...dbRecipes, ...arrRecipes];
};
module.exports = getDietsHome;
