import axiosWithAuth from "../utils/axiosWithAuth";

export const EDITING = "EDITING";
export const CANCEL_EDIT = "CANCEL_EDIT";
export const EDIT_RECIPE = "EDIT_RECIPE";
export const ADD_RECIPE = "ADD_RECIPE";

export const GET_RECIPES = "GET_RECIPES";
export const SEARCHRECIPE = "SEARCHRECIPE";
export const DELETE_RECIPE = "DELETE_RECIPE";

export const setEditing = (id) => {
  return { type: EDITING, payload: id };
};

export const cancelEdit = () => {
  return { type: CANCEL_EDIT };
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
// axiosWithAuth()
//       .get('https://back-end-recipe.herokuapp.com/api/items')
//       .then(resp => {
//           dispatch({type: GET_RECIPES, payload: resp.data})
//       })
// }

export const editRecipes = (current, recipe) => (dispatch) => {
  axiosWithAuth()
    .put(`https://back-end-recipe.herokuapp.com/api/items/${current.item_id}`, {
      ...recipe,
      user_id: current.user_id,
      item_id: current.item_id,
    })
    .then((resp) => {
      dispatch({ type: EDIT_RECIPE, payload: resp.data });
    });
};

export const addRecipe = (recipe) => (dispatch) => {
  axiosWithAuth()
    .post("https://back-end-recipe.herokuapp.com/api/items", recipe)
    .then((resp) => {
      dispatch({ type: ADD_RECIPE, payload: resp.data.newitem });
    });
};

export const deleteRecipe = (id) => (dispatch) => {
  axiosWithAuth()
    .delete(`https://back-end-recipe.herokuapp.com/api/items/${id} `)
    .then((resp) => {
      dispatch({ type: DELETE_RECIPE, payload: id });
    });
};
