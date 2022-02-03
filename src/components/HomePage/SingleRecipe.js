import React, { useState } from "react";
import { editRecipes } from "../actions";
import { connect } from "react-redux";
import { deleteRecipe } from '../actions'

function SingleRecipe(props) {
  const { recipe, dispatch } = props;

  const [ editing, setEditing ] = useState(false)
 
  const [state, setState] = useState({
    title: recipe.title,
    source: recipe.source,
    ingredients: recipe.ingredients,
    instructions:recipe.instructions,
    category: recipe.category
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  
  const handleCancel = () => {
    setEditing(!editing)
    setState({
    title: recipe.title,
    source: recipe.source,
    ingredients: recipe.ingredients,
    instructions:recipe.instructions,
    category: recipe.category
    })
  }

  const handleEdit = () => {
    setEditing(!editing)
    dispatch(editRecipes(recipe, state))
  }

  const handleDelete = () => {
      dispatch(deleteRecipe(recipe.item_id))
  }

  return (
    <div>
      <h2>
        {editing ? <><strong>Title: </strong><input onChange={handleChange} name='title' type='text'  value={state.title}/> </>: recipe.title}
      </h2>
      <p>
        <strong>Source: </strong>{editing ?<input onChange={handleChange} name='source' type='text'  value={state.source}/>  : recipe.source}
      </p>
      <h4>
        <strong>Ingredients:</strong> {editing ?<input onChange={handleChange} name='ingredients' type='text' value={state.ingredients}/>  : recipe.ingredients}
      </h4>
      <h4>
        <strong>Instructions:</strong> {editing ?<input onChange={handleChange} name='instructions' type='text' value={state.instructions}/>  : recipe.instructions}
      </h4>
      <h4>
        <strong>Category:</strong> {editing ?<input onChange={handleChange} name='category' type='text' value={state.category}/>  : recipe.category}
      </h4>
      <button onClick={() => handleCancel()}>{editing ? 'Cancel' : "Edit"}</button>
      {editing && <button onClick={handleEdit}>Save</button>}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}


export default connect ()(SingleRecipe);
