const { Diets } = require("../db");
const { Recipe } = require("../db");
const postRecipe = async (
  title,
  summary,
  healthScore,
  step,
  score,
  image,
  diet
) => {
  if (!summary || !title) throw Error("Summary or title is not defined!");
  const result = await Recipe.create({
    title,
    image,
    summary,
    healthScore,
    step,
    score,
    diet,
  });

  // usamos el bucle forEach para iterar sobre diet.para cada elemento se usa
  //el metodo findOrCreate del modelo diet para buscar una dieta en la Db con el mismo nombre
  //este metodo devuelve un arreglo con dos valores el primero es la dieta encontrada o creada y el segundo un boleano

  diet.forEach(async (element) => {
    const [diet, flag] = await Diets.findOrCreate({
      where: {
        name: element.toLowerCase(),
      },
    });
    // usamos el metodo add para asociar las recetas creadas anteriormente(se hace usando la instacia de la receta y pasandole como argumento )
    await result.addDiets(diet);
  });
  // devuelve result
  return result;
};
module.exports = postRecipe;
