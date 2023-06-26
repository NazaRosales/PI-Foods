const createNewRecipe = (recipe) => {
  const URL = "http://localhost:3001/recipes/";

  //trim remove spaces at end of any ,
  const scoreNumber = parseFloat(recipe.score)
  const formatedRecipe = {
    ...recipe,
    score: scoreNumber,
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
export default createNewRecipe;
