import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { setEditing } from "../actions";
import EditRecipeForm from "../forms/EditRecipeForm";
import SingleRecipe from "./SingleRecipe";

function RecipeListings(props) {
  const { recipe, editing, setEditing, recipeId } = props;
  //console.log(recipeId);
  const handleEditSelect = (id) => {
    setEditing(id);
  };

  return (
    <RecipeList>
      <Container>
        {editing && <EditRecipeForm />}
        {recipe.map((recipe) => {
          return (
            <RecipeItem key={recipe.title}>
              <SingleRecipe
                recipe={recipe}
                handleEditSelect={handleEditSelect}
              />
            </RecipeItem>
          );
        })}
      </Container>
    </RecipeList>
  );
}
const mapStateToProps = (state) => {
  return {
    recipe: state.recipe,
    editing: state.editing,
    recipeId: state.recipeId,
  };
};
export default connect(mapStateToProps, { setEditing })(RecipeListings);

const RecipeList = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;
const RecipeItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: auto;
  margin-top: 50px;
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
  font-family: oxygen;
  font-size: 1.5rem;
`;

const Container = styled.div`
  margin-top: 80px;
`;
