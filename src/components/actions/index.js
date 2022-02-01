export const EDITING = "EDITING";
export const CANCELEDIT = "CANCELEDIT";

export const setEditing = (id) => {
  return { type: EDITING, payload: id };
};
export const cancelEdit = () => {
  return { type: CANCELEDIT };
};
