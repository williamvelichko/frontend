import React from "react";

function SingleRecipe(props) {
  const { recipe, handleEditSelect } = props;

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>
        <strong>Source:</strong> {recipe.source}
      </p>
      <h4>
        <strong>Ingrediants: {recipe.ingrediants}</strong>
      </h4>
      <h4>
        <strong>Instructions: {recipe.instructions}</strong>
      </h4>
      <h4>
        <strong>Category: {recipe.category}</strong>
      </h4>
      <button onClick={() => handleEditSelect(recipe.id)}>Edit</button>
    </div>
  );
}

export default SingleRecipe;
