const createRecipe = (recipe) => {
  const URL = "http://localhost:3001/recipes/";

  //trim remove spaces at end of any ,
  const arrayDiets = recipe.diet.split(",").map((diet) => diet.trim());
  const formatedRecipe = {
    ...recipe,
    diet: arrayDiets,
  };

  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formatedRecipe),
  })
    .then((response) => {
      if (response.ok) {
        console.log("Recipe created successfully");
      } else {
        throw new Error("Error creating recipe");
      }
    })
    .catch((error) => {
      console.error("Error creating recipe:", error);
    });
};
export default createRecipe;
