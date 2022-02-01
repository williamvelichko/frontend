import { EDITING, EDITRECIPE, CANCELEDIT } from "./../actions/index";

const initialState = {
  recipe: [
    {
      id: 52,
      title: "Baked Fruit Dessert",
      source: "Shannon Dobbs",
      ingrediants:
        "3 cups sliced apples 1 cup strawberries (sliced) 1 cup raspberries  2 tbsp lemon juice 1 tsp cinnamon  1 banana (sliced)",
      instructions:
        " Preheat oven to 350 degrees Fahrenheit  1. Spray a baking pan with cooking spray 2.Mix together the...",
      category: "dessert",
    },
    {
      id: 75,
      title: "Homemade Croutons",
      source: "Shannon Dobbs",
      ingrediants:
        "– Bread of your choice ripped into bite sized pieces  – 2 tbsp olive oil – Seasonings of your choice (Parmesan, salt, pepper, garlic, etc",
      instructions:
        " Preheat oven to 350 degrees Fahrenheit Toss ripped bread pieces into a bowl with olive oil and seasonings Place the bread pieces on a baking sheet Bake until crispy (about 15 minutes) ",
      category: "dinner",
    },
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
    case CANCELEDIT:
      return {
        ...state,
        editing: false,
      };
    case EDITRECIPE:
      const editedRecipe = {
        ...action.payload,
        id: Date.now(),
      };
      return {
        ...state,
        editing: false,
        recipe: [...state.recipe, editedRecipe],
      };
    default:
      return state;
  }
};
export default reducer;
