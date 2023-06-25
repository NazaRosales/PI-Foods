const { Diet } = require("../db");
const getDietStart = async (recipes) => {
  let arrayDiets = [];
  recipes.forEach((recipe) => {
    arrayDiets = [...arrayDiets, ...recipe.diet];
  });
  const result = [...new Set(arrayDiets)]; // new array deleting repeated
  result.forEach(async (element) => {
    await Diet.create({ name: element });
  });
  return result;
};
module.exports = getDietStart;
