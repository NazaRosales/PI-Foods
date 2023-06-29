import axios from "axios";

export const GET_HOME_CARDS = "GET_HOME_CARDS";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const GET_HOME_FILTERED = "GET_HOME_FILTERED";
export const CLEAR_FILTERED_RECIPES = "CLEAR_FILTERED_RECIPES";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

export const getHomeRecipes = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3001/home");
      dispatch({ type: GET_HOME_CARDS, payload: data });
    } catch (error) {
      alert(`Recipes not found. Error: ${error.message}`);
    }
  };
};

export const getHomeFiltered = (filters) => {
  return (dispatch, getState) => {
    const { recipes } = getState();
    let filteredRecipes = [...recipes];

    if (filters.input) {
      dispatch(recipesByName(filters.input));
      //arreglar la busqueda por nombre
    }

    if (filters.diet) {
      filteredRecipes = filteredRecipes.filter((recipe) =>
        recipe.diet.includes(filters.diet)
      );
    }

    if (filters.alphOrder !== "By Default") {
      filteredRecipes = filteredRecipes.sort((a, b) => {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();
        if (filters.alphOrder === "A-Z") return titleA.localeCompare(titleB);
        if (filters.alphOrder === "Z-A") return titleB.localeCompare(titleA);
        return 0;
      });
    }

    if (filters.scoreOrder === "100 - 0") {
      function compare(recipeA, recipeB) {
        return recipeB.healthScore - recipeA.healthScore;
      }
      filteredRecipes.sort(compare);
    } else if (filters.scoreOrder === "0 - 100") {
      function compare(recipeA, recipeB) {
        return recipeA.healthScore - recipeB.healthScore;
      }
      filteredRecipes.sort(compare);
    }
    dispatch({ type: GET_HOME_FILTERED, payload: filteredRecipes });
  };
};

export const clearFilteredRecipes = () => {
  return { type: CLEAR_FILTERED_RECIPES };
};

export const createRecipe = (recipe) => {
  return { type: CREATE_RECIPE, payload: recipe };
};

export const setCurrentPage = (pageNumber) => {
  return { type: SET_CURRENT_PAGE, payload: pageNumber };
};

export const recipesByName = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/recipes/name?name=${name}`
      );
      dispatch({ type: GET_HOME_FILTERED, payload: data });
    } catch (error) {
      alert(`Recipe ${name} does not exist. 🔍︎`);
    }
  };
};
