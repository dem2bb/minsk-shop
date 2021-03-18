import React, { Component } from "react";
import { productRoutes } from "../../routes/productRoutes";
import NavigationList from "../../components/navigation/NavigationList";
import NavigationRoutes from "../../components/navigation/NavigationRoutes";

class Products extends Component {
  componentDidMount() {
    this.props.history.push(`${this.props.match.url}/list`);
  }

  render() {
    return (
      <>
        <NavigationList routes={productRoutes} match={this.props.match.url} />
        <NavigationRoutes routes={productRoutes} match={this.props.match.url} />
      </>
    );
  }
}

export default Products;
