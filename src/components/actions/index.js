export const EDITING = "EDITING";
export const CANCELEDIT = "CANCELEDIT";
export const EDITRECIPE = "EDITRECIPE";

export const setEditing = (id) => {
  return { type: EDITING, payload: id };
};
export const cancelEdit = () => {
  return { type: CANCELEDIT };
};
export const saveEditRecipe = (editedRecipe) => {
  return { type: EDITRECIPE, payload: editedRecipe };
};
