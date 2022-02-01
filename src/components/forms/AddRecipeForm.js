import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const AddRecipe = () => {
    const { push } = useHistory();
    const [recipe, setRecipe] = useState({
        title:'',
        source:'',
        ingredients:'',
        instructions:'',
        category: '',
    });

    const [error, setError] = useState('')

    const handleChange = e => {
        setRecipe({...recipe, [e.target.name]: e.target.value })
    };

    const submit = e => {
        e.preventDefault();
        if(recipe.title === '' || recipe.source === '' || recipe.ingredients === '' || recipe.instructions === '' || recipe.category === ''){
            setError('ALL FIELDS REQUIRED!')
        } else {
            push('/recipelisting')
        }
    };

    return(
        <form onSubmit={submit}>
            <label>Title</label>
            <input
                name='title'
                type='text'
                placeholder="Enter your recipe name"
                value={recipe.title}
                onChange={handleChange}
            />
            <label>Source</label>
            <input
                name='source'
                type='text'
                value={recipe.source}
                onChange={handleChange}
            />
            <label>Ingredients</label>
            <input
                name="ingredients"
                type='text'
                value={recipe.ingredients}
                onChange={handleChange}
            />
            <label>Instructions</label>
            <input    
                name='instructions'
                type='text'
                value={recipe.instructions}
                onChange={handleChange}
            />
            <label>Category</label>
            <input
                name='category'
                type='text'
                value={recipe.category}
                onChange={handleChange}
            />
            <button>Add Recipe!</button> 
            <p>{error}</p> 
        </form>
    )
}

export default AddRecipe;