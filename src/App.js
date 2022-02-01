import "./App.css";
import Detials from "./components/header/details";
import { Route, Switch } from "react-router-dom";
import Login from "./components/forms/LogInForm";
import Signup from "./components/forms/SignUpForm";
import HomePage from "./components/HomePage/RecipeListings";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Detials />
      </header>
      <div className="route_container">
        <Switch>
          <Route path="/signup" component={Signup}/>
          <Route path="/recipelisting" component={HomePage} />
          <Route path="/logout"/>
          <Route path="/login" component={Login}/>
          <Route exact path="/" component={Login}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
