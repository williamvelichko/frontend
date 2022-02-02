import "./App.css";
import Detials from "./components/header/details";
import { Route, Switch, useParams } from "react-router-dom";
import Login from "./components/forms/LogInForm";
import Signup from "./components/forms/SignUpForm";
import HomePage from "./components/HomePage/RecipeListings";

import EditRecipeForm from "./components/forms/EditRecipeForm";
import AddRecipe from "./components/forms/AddRecipeForm";
import PrivateRoute from "./components/utils/PrivateRoute";
import Logout from "./components/forms/Logout";

function App() {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="App">
      <header className="App-header">
        <Detials />
      </header>
      <div className="route_container">
        <Switch>
          <PrivateRoute
            exact
            path="/recipelisting/edit/id"
            component={EditRecipeForm}
          />

          <PrivateRoute path="/addrecipe" component={AddRecipe} />

          <PrivateRoute path="/recipelisting" component={HomePage} />

          <PrivateRoute path="/logout" component={Logout} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Signup} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
