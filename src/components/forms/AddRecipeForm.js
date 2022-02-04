import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import { connect } from "react-redux";
import { addRecipe } from "../actions";

const AddRecipe = (props) => {
  const { push } = useHistory();
  const [recipe, setRecipe] = useState({
    title: "",
    source: "",
    ingredients: "",
    instructions: "",
    category: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    if (
      recipe.title === "" ||
      recipe.source === "" ||
      recipe.ingredients === "" ||
      recipe.instructions === "" ||
      recipe.category === ""
    ) {
      setError("ALL FIELDS REQUIRED!");
    } else {
      props.dispatch(addRecipe(recipe));
      push("/recipelisting");
    }
  };

  return (
    <AddRecipeWrapper>
      <Container>
        <AddRecipeForm>
          <form onSubmit={submit}>
            <Fields>
              <h1>Add Recipe</h1>
              <label>Title :</label>
              <input
                name="title"
                type="text"
                placeholder="Enter your recipe name"
                value={recipe.title}
                onChange={handleChange}
              />
              <label>Source :</label>
              <input
                name="source"
                type="text"
                value={recipe.source}
                onChange={handleChange}
              />
              <label>Ingredients :</label>
              <input
                name="ingredients"
                type="text"
                value={recipe.ingredients}
                onChange={handleChange}
              />
              <label>Instructions :</label>
              <input
                name="instructions"
                type="text"
                value={recipe.instructions}
                onChange={handleChange}
              />
              <label>Category :</label>
              <input
                name="category"
                type="text"
                value={recipe.category}
                onChange={handleChange}
              />
              <button>Add Recipe!</button>
              <p>{error}</p>
            </Fields>
          </form>
        </AddRecipeForm>
      </Container>
    </AddRecipeWrapper>
  );
};

export default connect()(AddRecipe);

const Container = styled.div`
  margin-top: 120px;
`;
const AddRecipeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AddRecipeForm = styled.div`
  width: 40%;
  margin: auto;
  border: 4px solid #780116;
  border-radius: 5px;
  padding: 84px;
  background-color: #fffae5;
  margin-top: 2px;
`;
const Fields = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 420px) {
    h1 {
      font-size: 1.5rem;
    }
  }
  button {
    width: 40%;
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 5px 0em;
    padding: 0.25em 1em;
    @media (max-width: 420px) {
      width: 50%;
    }
  }
  button:hover {
    background-color: #fff2b2;
    border: 3px solid palevioletred;
  }
  input {
    width: 75%;
    margin: 10px 0px;
  }
`;
