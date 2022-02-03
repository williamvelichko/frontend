import React from "react";
import { Link } from "react-router-dom";

function SingleRecipe(props) {
  const { recipe, handleEditSelect } = props;

  return (
    <div>
      <h2>{recipe.item_name}</h2>
      <p>
        <strong>Source:</strong> {recipe.source}
      </p>
      <h4>
        <strong>ingredients: {recipe.ingredients}</strong>
      </h4>
      <h4>
        <strong>Instructions: {recipe.instructions}</strong>
      </h4>
      <h4>
        <strong>Category: {recipe.category}</strong>
      </h4>

      <Link to={`/recipelisting/${recipe.id}`}>
        <button onClick={() => handleEditSelect(recipe.id)}>Edit</button>
      </Link>
    </div>
  );
}

export default SingleRecipe;
