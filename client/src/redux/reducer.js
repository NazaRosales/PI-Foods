import {
  GET_HOME_CARDS,
  CREATE_RECIPE,
  CLEAR_FILTERED_RECIPES,
  SET_CURRENT_PAGE,
  GET_HOME_FILTERED,
  FILTER_BY_DIET,
  ORDER_BY_HEALTH,
  FILTER_BY_ORIGIN,
  ORDER_BY_TITLE
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
          action.payload === "0 - 100"
            ? [...state.recipes.sort((a, b) => a.healthScore - b.healthScore)]
            : [...state.recipes.sort((a, b) => b.healthScore - a.healthScore)]
      };
      case FILTER_BY_ORIGIN:
        return{
          ...state,
          filteredRecipes:
          action.payload === "From DB" 
          ? [...state.recipes.filter( recipe => typeof(recipe.id) !== "number")]
          : [...state.recipes.filter( recipe => typeof(recipe.id) === "number")]
        }
      case ORDER_BY_TITLE:
        return {
          ...state, 
          filteredRecipes: (action.payload === 'A-Z')
          ? [...state.filteredRecipes.sort((a, b) => a.title.localeCompare(b.title))]
          : [...state.filteredRecipes.sort((a, b) => b.title.localeCompare(a.title))]
        }
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
