import React from "react";
import Layout from "./Layout";
// import Home from "./Home";
import About from "./About";
// import AppNavBar from "./AppNavBar";

class App extends React.Component {
  render() {
    return (
      <div>
        <Layout component={About} />
      </div>
    );
  }
}

export default App;
