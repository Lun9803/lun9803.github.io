import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React from "react";
import Home from './containers/Home/Home';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
