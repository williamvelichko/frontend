import axiosWithAuth from "../utils/axiosWithAuth";

export const EDITING = "EDITING";
export const CANCEL_EDIT = "CANCEL_EDIT";
export const EDIT_RECIPE = "EDIT_RECIPE";
export const ADD_RECIPE = "ADD_RECIPE";
export const GET_RECIPES = "GET_RECIPES";
export const SEARCHRECIPE = "SEARCHRECIPE";

export const setEditing = (id) => {
  return { type: EDITING, payload: id };
};

export const cancelEdit = () => {
  return { type: CANCEL_EDIT };
};

export const saveEditRecipe = (editedRecipe) => {
  return { type: EDIT_RECIPE, payload: editedRecipe };
};

export const getRecipes = () => (dispatch) => {
  axiosWithAuth()
    .get("https://back-end-recipe.herokuapp.com/api/items")
    .then((resp) => {
      console.log(resp.data);
      dispatch({ type: GET_RECIPES, payload: resp.data });
    });
};

export const searchRecipe = (recipe) => {
  return { type: SEARCHRECIPE, payload: recipe };
};
