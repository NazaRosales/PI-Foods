import axios from "axios";

export const GET_HOME_CARDS = "GET_HOME_CARDS";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const GET_HOME_FILTERED = "GET_HOME_FILTERED";
export const CLEAR_FILTERED_RECIPES = "CLEAR_FILTERED_RECIPES";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const FILTER_BY_DIET = "FILTER_BY_DIET";
export const ORDER_BY_HEALTH = "ORDER_BY_HEALTH";
export const FILTER_BY_ORIGIN = "FILTER_BY_ORIGIN";
export const ORDER_BY_TITLE = "ORDER_BY_TITLE";
export const FILTER_BY_NAME = "FILTER_BY_NAME";

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
  return async (dispatch) => {
    try {
      if (filters.input) {
        const { data } = await axios.get(
          `http://localhost:3001/recipes/name?name=${filters.input}`
        );
        dispatch({ type: FILTER_BY_NAME, payload: data });
      }
    } catch (error) {
      alert(
        `Recipe ${filters.input} does not exist. 🔍︎ \n Error: ${error.message}`
      );
    }
    if (filters.diet && filters.diet !== "All Diets") {
      dispatch({ type: FILTER_BY_DIET, payload: filters.diet });
    }

    if (filters.origin && filters.origin !== "All Origins") {
      dispatch({ type: FILTER_BY_ORIGIN, payload: filters.origin });
    }

    if (filters.alphOrder && filters.alphOrder !== "By Default") {
      dispatch({ type: ORDER_BY_TITLE, payload: filters.alphOrder });
    }
    if (filters.scoreOrder && filters.scoreOrder !== "Health score") {
      dispatch({ type: ORDER_BY_HEALTH, payload: filters.scoreOrder });
    }
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
