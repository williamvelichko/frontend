import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { cancelEdit, saveEditRecipe } from "../actions";

function EditRecipeForm({
  stateRecipe,
  cancelEdit,
  saveEditRecipe,
  initialRecipe,
}) {
  const [recipe, setRecipe] = useState(initialRecipe);
  const { push } = useHistory();

  useEffect(() => {
    setRecipe(stateRecipe[0]);
  }, []);

  const handleChange = (e) => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    saveEditRecipe(recipe);
    push("/recipelisting");
  };
  const handleCancel = (e) => {
    e.preventDefault();
    cancelEdit();
    push("/recipelisting");
  };

  return (
    <RecipeForm>
      <RecipeItem>
        <h3>Edit Recipe</h3>
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
        <div>
          <button onClick={handleSubmit}>Save Editing Recipe</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </RecipeItem>
    </RecipeForm>
  );
}
const mapState = (state) => {
  return {
    stateRecipe: state.recipe,
    initialRecipe: state.initialRecipe,
  };
};
export default connect(mapState, { cancelEdit, saveEditRecipe })(
  EditRecipeForm
);

const RecipeForm = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;
`;
const RecipeItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: auto;
  margin-top: 120px;
  border: 4px solid #780116;
  border-radius: 5px;
  padding: 30px;
  background-color: #fffae5;
  margin-bottom: 20px;
  button {
    width: 20%;
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
  }
  button:hover {
    background-color: #fff2b2;
    border: 3px solid palevioletred;
  }
  :hover {
    box-shadow: 10px 5px 5px #db7c26;
  }
  input {
    margin-bottom: 10px;
    background-color: #fffae5;
    padding: 10px;
    font-size: 1.3rem;
  }
  font-family: oxygen;
  font-size: 1.5rem;
`;

const Container = styled.div`
  margin-top: 80px;
`;
