import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import AddRecipeForm from "./../forms/AddRecipeForm";
import Recipelisting from "./../HomePage/RecipeListings";
test("renders without error", async () => {
  render(<Recipelisting />);
});
