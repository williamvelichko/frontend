import React, { useState } from "react";
import { connect } from "react-redux";
const initialRecipe = {
  id: "",
  title: "will",
  source: "will",
  ingrediants: "asa",
  instructions: "assa",
  category: "dinner",
};

function EditRecipeForm() {
  const [recipe, setRecipe] = useState(initialRecipe);

  const handleChange = () => {};

  return (
    <form>
      <div>
        <input value={recipe.title} name="title" onChange={handleChange} />
        <input value={recipe.source} name="source" onChange={handleChange} />
        <input
          value={recipe.ingrediants}
          name="ingrediants"
          onChange={handleChange}
        />
        <input
          value={recipe.instructions}
          name="instructions"
          onChange={handleChange}
        />
        <input
          value={recipe.category}
          name="category"
          onChange={handleChange}
        />
      </div>
    </form>
  );
}
const mapState = (state) => {
  return {
    recipe: state.recipe,
  };
};
export default connect(mapState)(EditRecipeForm);
