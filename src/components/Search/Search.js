import React, { useState } from "react";
import RecipeListings from "../HomePage/RecipeListings";
import { connect } from "react-redux";

function Search({ filter, recipe }) {
  //const seearch = ()
  let dataSearch = recipe.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });
  return <div></div>;
}
const mapState = (state) => {
  return {
    recipe: state.recipe,
  };
};
export default connect(mapState)(Search);
