import React from "react";
import "./index.css";
import AppHeader from "../common/header/header";

class Layout extends React.Component {
  render() {
    return (
      <div>
        <AppHeader></AppHeader>
        <div className={"content"}>
          {this.props.children}
        </div>

        <footer className={"footer"}><span>footer content</span></footer>
      </div>
    );
  }
}

export default Layout;
