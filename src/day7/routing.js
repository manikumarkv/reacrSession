import React from "react";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import About from "./About";

class Routing extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/aboutme"
            render={() => {
              return (
                <Layout>
                  <About />
                </Layout>
              );
            }}
          />
          <Route
            path="/home"
            render={() => {
              return (
                <Layout>
                  <Home />
                </Layout>
              );
            }}
          />

          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default Routing;
