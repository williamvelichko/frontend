import { EDITING, EDIT_RECIPE, CANCEL_EDIT, ADD_RECIPE, GET_RECIPES } from "./../actions/index";

const initialState = {
  recipe: [
    // {
    //   id: 52,
    //   title: "Baked Fruit Dessert",
    //   source: "Shannon Dobbs",
    //   ingrediants:
    //     "3 cups sliced apples 1 cup strawberries (sliced) 1 cup raspberries  2 tbsp lemon juice 1 tsp cinnamon  1 banana (sliced)",
    //   instructions:
    //     " Preheat oven to 350 degrees Fahrenheit  1. Spray a baking pan with cooking spray 2.Mix together the...",
    //   category: "dessert",
    // },
    // {
    //   id: 75,
    //   title: "Homemade Croutons",
    //   source: "Shannon Dobbs",
    //   ingrediants:
    //     "– Bread of your choice ripped into bite sized pieces  – 2 tbsp olive oil – Seasonings of your choice (Parmesan, salt, pepper, garlic, etc",
    //   instructions:
    //     " Preheat oven to 350 degrees Fahrenheit Toss ripped bread pieces into a bowl with olive oil and seasonings Place the bread pieces on a baking sheet Bake until crispy (about 15 minutes) ",
    //   category: "dinner",
    // },
  ],
  editing: false,
  recipeId: "",
  initialRecipe: {
    id: "",
    title: "",
    source: "",
    ingrediants: "",
    instructions: "",
    category: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case EDITING:
      return {
        ...state,
        editing: true,
        recipeId: action.payload,
      };
    case CANCEL_EDIT:
      return {
        ...state,
        editing: false,
      };
    case EDIT_RECIPE:
      return {
        ...state,
        // editing: false,
        recipe: state.recipe.map(rec => { 
          if(rec.item_id === action.payload.item_id){
            return action.payload
          }
          return rec
        } )
      };
    case ADD_RECIPE:
      return {
        ...state,
        recipe: [...state.recipe, action.payload ]
      }
    case GET_RECIPES:
      return {
        ...state,
        recipe: action.payload
      }
      
    default:
      return state;
  }
};
export default reducer;
