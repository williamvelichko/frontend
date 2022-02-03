import axiosWithAuth from "../utils/axiosWithAuth";

export const EDITING = "EDITING";
export const CANCEL_EDIT = "CANCEL_EDIT";
export const EDIT_RECIPE = "EDIT_RECIPE";
export const ADD_RECIPE = "ADD_RECIPE";
export const GET_RECIPES = 'GET_RECIPES';


export const setEditing = (id) => {
  return { type: EDITING, payload: id };
};

export const cancelEdit = () => {
  return { type: CANCEL_EDIT };
};

export const getRecipes = () => (dispatch) => {
  axiosWithAuth()
      .get('https://back-end-recipe.herokuapp.com/api/items')
      .then(resp => {
          dispatch({type: GET_RECIPES, payload: resp.data})
      })
}

export const editRecipes = (current, recipe) => (dispatch) => {
  axiosWithAuth()
      .put(`https://back-end-recipe.herokuapp.com/api/items/${current.item_id}`, {...recipe, user_id:current.user_id, item_id:current.item_id, item_name:'Jorge'} )
      .then(resp => {
        dispatch({type: EDIT_RECIPE, payload: resp.data[0]})
      })
}

