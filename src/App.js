import "./App.css";
import Detials from "./components/header/details";
//import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Detials />
      </header>
      <div className="route_container"></div>
    </div>
  );
}

export default App;
