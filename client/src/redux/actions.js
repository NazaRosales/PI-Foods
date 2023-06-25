import axios from "axios";
export const GET_HOME_CARDS = "GET_HOME_CARDS";
export const GET_FOOD_ID = "GET_FOOD_ID";
export const PUT_FOOD_BY_NAME = "PUT_FOOD_BY_NAME";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const CURRENT_PAGE = "CURRENT_PAGE";

export const getHomeRecipes = () => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get("http://localhost:3001/home");
      dispatch({type: GET_HOME_CARDS, payload: data})
    } catch (error) {
      alert(`Recipes not foud. Error: ${error.message}`);
    }
  };
};
