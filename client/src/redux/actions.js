import axios from "axios";
export const GET_HOME_CARDS = "GET_HOME_CARDS";
export const RECIPE_BY_NAME = "RECIPE_BY_NAME";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const GET_HOME_FITERED = "GET_HOME_FITERED";
export const CLEAR_FILTERED_RECIPES = "CLEAR_FILTERED_RECIPES"

export const getHomeRecipes = () => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get("http://localhost:3001/home");
      dispatch({ type: GET_HOME_CARDS, payload: data });
    } catch (error) {
      alert(`Recipes not foud. Error: ${error.message}`);
    }
  };
};

export const getHomeFiltered = (filteredRecipes) => {
  return { type: GET_HOME_FITERED, payload: filteredRecipes}
}
export const clearFilteredRecipes = () => {
  return { type: CLEAR_FILTERED_RECIPES };
};

export const createRecipe = (recipe) => {
  return { type: CREATE_RECIPE, payload: recipe };
};

export const recipesByName = (name) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`http://localhost:3001/recipes/name?name=${name}`);
      dispatch({ type: RECIPE_BY_NAME, payload: data });
    } catch (error) {
      alert(`Recipe ${name} do not exist. 🔍︎`);
    }
  };
};
