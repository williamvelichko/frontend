import "./App.css";
import Detials from "./components/header/details";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage/RecipeListings";
import EditRecipeForm from "./components/forms/EditRecipeForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Detials />
      </header>
      <div className="route_container">
        <Switch>
          <Route path="/edit" component={EditRecipeForm} />
          <Route path="/recipelisting" component={HomePage} />

          <Route path="/logout"></Route>
          <Route path="/login"></Route>
          <Route path="/"> </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
