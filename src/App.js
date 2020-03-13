import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Planner from "./components/pages/Planner";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App" data-test="component-app">
          <Route exact path="/" render={Home} />
          <Route exact path="/planner" render={Planner} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
