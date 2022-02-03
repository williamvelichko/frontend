import React, { useState } from "react";


function SingleRecipe(props) {
  const { recipe, handleEditSelect } = props;

  const [ editing, setEditing ] = useState(false)
 
  const [state, setState] = useState({
    source: recipe.source,
    ingredients: recipe.ingredients,
    instructions:recipe.instructions,
    category: recipe.category
  });

  const handleChange = (e) => {
    console.log(e)
    setState({ ...state, [e.target.name]: e.target.value });
  };
  
  const handleCancel = () => {
    setEditing(!editing)
    setState({
    source: recipe.source,
    ingredients: recipe.ingredients,
    instructions:recipe.instructions,
    category: recipe.category
    })
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
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
      {editing && <button>Save</button>}
    </div>
  );
}

export default SingleRecipe;
