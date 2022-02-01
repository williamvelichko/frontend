import "./App.css";
import Detials from "./components/header/details";
import { Route, Switch } from "react-router-dom";
import Login from "./components/forms/LogInForm";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Detials />
      </header>
      <div>
        <Login/>
      </div>
      <div className="route_container">
        <Switch>
          <Route path="/signup"></Route>
          <Route path='/home'></Route>
          <Route path="/logout"></Route>
          <Route path="/login"></Route>
          <Route path="/"> </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
