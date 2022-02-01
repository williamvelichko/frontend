import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

function RecipeListings(props) {
  const { recipe } = props;

  return (
    <RecipeList>
      <Container>
        {recipe.map((recipe) => {
          return (
            <RecipeItem key={recipe.title}>
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
              <button>Edit</button>
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
  };
};
export default connect(mapStateToProps)(RecipeListings);

const RecipeList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const RecipeItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: auto;
  margin-top: 50px;
  border: 4px solid #780116;
  border-radius: 5px;
  padding: 30px;
  background-color: #fffae5;
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
`;

const Container = styled.div`
  margin-top: 80px;
`;
