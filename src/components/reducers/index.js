const initialState = {
  recipe: {
    title: "Baked Fruit Dessert",
    source: "Shannon Dobbs",
    ingrediants:
      "3 cups sliced apples 1 cup strawberries (sliced) 1 cup raspberries  2 tbsp lemon juice 1 tsp cinnamon  1 banana (sliced)",
    instructions:
      " Preheat oven to 350 degrees Fahrenheit  1. Spray a baking pan with cooking spray 2.Mix together the...",
    category: "dessert",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default reducer;
