import {
  GET_HOME_CARDS,
  GET_FOOD_ID,
  PUT_FOOD_BY_NAME,
  CREATE_RECIPE,
  CURRENT_PAGE,
} from "./actions";
const initialState = {
  recipes: [],
  diets: [],
  foodDetail: {},
  currentPage: 0,
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOME_CARDS:
      const {recipes, diets} = action.payload;
      return {
        ...state,
        recipes: recipes,
        diets: diets,
      };

    case PUT_FOOD_BY_NAME:
      return {
        ...state,
        foods: action.payload,
      };
    default:
      return { ...state };
  }
};
export default rootReducer;
