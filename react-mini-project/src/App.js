import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(routes) {
  return (
    <Router>
      <AppContainer>
        <Switch>
          <Route exact path="/homepage">
            {/* page header here */}
            {/* home page here */}
          </Route>
          <Route exact path="/profile">
            {/* page header here */}
            {/* page profile here */}
          </Route>
          <Route exact path="/order">
            {/* page header here */}
            {/* page order here */}
          </Route>
          <Route exact path="/signup">
            {/* sign up page here */}
          </Route>
          <Route exact path="/">
            {/* login page here */}
          </Route>
        </Switch>
      </AppContainer>
    </Router>
  );
}

export default App;
