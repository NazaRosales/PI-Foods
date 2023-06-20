const { Recipe } = require("../db.js");
const { Op } = require("sequelize");
const axios = require("axios");
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const getRecipeByName = async (req, res, name) => {
  try {
    const recipes = await Recipe.findAll({
      where: {
        title: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });

    if (recipes.length > 0) {
      res.status(200).json(recipes);
    } else {
      const recipeApi = await recipeFromApi(name);
      if (recipeApi.length > 0) {
        res.status(200).json(recipeApi);
      } else {
        throw Error(`There is no recipe with ${name} included in its name`);
      }
    }
  } catch (error) {
    res.status(500).send(error.message);
  }

  const recipeFromApi = async (name) => {
    const { data } = await axios.get( `${URL}?apiKey=${api_key}&addRecipeInformation=true&number=25`); //max 25
    let result = [];
    if(data.results.length){
        result = data.results.map(e => {
            return{
                id: e.id,
                title: e.title,
                healthScore: e.healthScore,
                summary: e.summary,
                image: e.image,
                diet: e.diets,
            }
        })
    }
    return result.filter((element) => element.title.toUpperCase().includes(name.toUpperCase()))
  };
};
module.exports = getRecipeByName;
