import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Dashboard from "./pages/dashboard";
import Pin from "./pages/pin";
import Login from "./pages/login";

function App() {
  return (
    <Router>
      <div> 
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Pin" component={Pin} />
          <Route exact path="/Dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
