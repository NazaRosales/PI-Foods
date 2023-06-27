const { Diets } = require("../db");
const getDietStart = async (recipes) => {
  let arrayDiets = [];
  recipes.forEach((recipe) => {
    arrayDiets = [...arrayDiets, ...recipe.diet];
  });
  const result = [...new Set(arrayDiets)]; // new array deleting repeated
  console.log(result)
  result.forEach(async (element) => {
    await Diets.create({ name: element });
  });
  return result;
};
module.exports = getDietStart;
