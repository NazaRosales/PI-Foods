import {
  GET_HOME_CARDS,
  CREATE_RECIPE,
  CLEAR_FILTERED_RECIPES,
  SET_CURRENT_PAGE,
  GET_HOME_FILTERED,
  FILTER_BY_DIET,
  ORDER_BY_HEALTH,
  FILTER_BY_ORIGIN,
  ORDER_BY_TITLE,
  FILTER_BY_NAME,
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
        filteredRecipes: [action.payload, ...state.filteredRecipes],
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case FILTER_BY_NAME:
      /*let recipesMatched = [...state.filteredRecipes].filter((recipe) =>
        recipe.title.toUpperCase().includes(action.payload.toUpperCase())
      );
      let recipesMatched = [...state.filteredRecipes]

      if (recipesMatched.length === 0) {
        recipesMatched = [...state.filteredRecipes];
        alert(`Recipe ${action.payload} was not finded. 🔍︎`);
      }
      return {
        ...state,
        filteredRecipes: recipesMatched,
      };*/
      const recipesMatched = action.payload.filter((recipe) =>
        [...state.filteredRecipes].some(
          (filteredRecipe) => filteredRecipe.id === recipe.id
        )
      );
      return {
        ...state,
        filteredRecipes: recipesMatched,
      };
    case FILTER_BY_DIET:
      console.log(action.payload);
      const filteredByDiet = [...state.filteredRecipes].filter((recipe) =>
        recipe.diet.includes(action.payload)
      );
      return {
        ...state,
        filteredRecipes: filteredByDiet,
      };

    case ORDER_BY_HEALTH:
      const orderedByHealth =
        action.payload === "0 - 100"
          ? [
              ...state.filteredRecipes.sort(
                (a, b) => a.healthScore - b.healthScore
              ),
            ]
          : [
              ...state.filteredRecipes.sort(
                (a, b) => b.healthScore - a.healthScore
              ),
            ];
      return {
        ...state,
        filteredRecipes: orderedByHealth,
      };

    case FILTER_BY_ORIGIN:
      const filteredByOrigin =
        action.payload === "From DB"
          ? [...state.filteredRecipes].filter(
              (recipe) => typeof recipe.id !== "number"
            )
          : [...state.filteredRecipes].filter(
              (recipe) => typeof recipe.id === "number"
            );
      return {
        ...state,
        filteredRecipes: filteredByOrigin,
      };

    case ORDER_BY_TITLE:
      const orderedByTitle =
        action.payload === "A-Z"
          ? [...state.filteredRecipes].sort((a, b) =>
              a.title.localeCompare(b.title)
            )
          : [...state.filteredRecipes].sort((a, b) =>
              b.title.localeCompare(a.title)
            );
      return {
        ...state,
        filteredRecipes: orderedByTitle,
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
