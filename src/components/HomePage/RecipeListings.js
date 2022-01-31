import React from "react";
import { connect } from "react-redux";

function RecipeListings(props) {
  const { recipe } = props;

  return (
    <div className="recipeList">
      <h2>{recipe.title}</h2>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    recipe: state.recipe,
  };
};
export default connect(mapStateToProps)(RecipeListings);
