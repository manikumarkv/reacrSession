import React from "react";
import axios from "axios";
import "./index.css";
class AppContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  componentWillMount() {
    const getutl =
      "https://lz1y3ef4p0.execute-api.ap-south-1.amazonaws.com/prod/products";
    axios.get(getutl).then(success => {
      this.setState({
        products: success.data
      });
    });
  }
  render() {
    return (
      <div>
        {this.state.products.map(product => {
          return (
            <div className={"productContainer"}>
              <div>
                Id: <bold>{product.id}</bold>
              </div>
              <div>
                name: <span>{product.name}</span>{" "}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default AppContent;
