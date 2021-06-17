import React from "react";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import App from "./App";
import About from "./About";
import Error from "./Error";

function Routes() {
  return (
    <div>
      <HashRouter>
        <h1>Our Pages: <Link to="/">Home</Link> | <Link to="/about">About</Link></h1>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/about" component={About} />
          <Route component={Error} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default Routes;