import {
  GET_HOME_CARDS,
  CREATE_RECIPE,
  CLEAR_FILTERED_RECIPES,
  SET_CURRENT_PAGE,
  GET_HOME_FILTERED,
  FILTER_BY_DIET,
  ORDER_BY_HEALTH,
} from "./actions";
const initialState = {
  recipes: [],
  diets: [],
  filteredRecipes: [],
  currentPage: 1,
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOME_CARDS:
      const { recipes, diets } = action.payload;
      return {
        ...state,
        recipes: recipes,
        diets: diets,
        filteredRecipes: recipes,
      };

    case CREATE_RECIPE:
      return {
        ...state,
        recipes: [action.payload, ...state.recipes],
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case FILTER_BY_DIET:
      return {
        ...state,
        filteredRecipes: state.recipes.filter((recipe) =>
          recipe.diet.includes(action.payload)
        ),
      };
    case ORDER_BY_HEALTH:
      console.log(action.payload);
      return {
        ...state,
        filteredRecipes:
          action.payload === "100 - 0"
            ? [...state.recipes.sort((a, b) => a.healthScore - b.healthScore)]
            : [...state.recipes.sort((a, b) => b.healthScore - a.healthScore)],
      };
    case GET_HOME_FILTERED:
      return {
        ...state,
      };
    case CLEAR_FILTERED_RECIPES:
      return {
        ...state,
        filteredRecipes: state.recipes,
      };
    default:
      return { ...state };
  }
};
export default rootReducer;
