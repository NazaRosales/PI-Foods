import {
  GET_HOME_CARDS,
  CREATE_RECIPE,
  RECIPE_BY_NAME
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

      case CREATE_RECIPE:
        return {
          ...state,
          recipes: [action.payload, ...state.recipes ]
        }

    case RECIPE_BY_NAME:
      return {
        ...state,
        recipes: action.payload,
      };
    default:
      return { ...state };
  }
};
export default rootReducer;
