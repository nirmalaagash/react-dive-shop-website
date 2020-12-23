import React from "react";
import ProductPage from "./components/pages/ProductPage";
import CartPage from "./components/pages/CartPage";
import Login from "./components/login/Login";
import Signup from "./components/login/Signup";

class App extends React.Component {

  constructor() {
    super();
    this.addToCart.bind(this);
  }

  addToCart = (item) => {
    console.log("Here in Add To Cart");
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((cartitem) => {
      if (item._id === cartitem._id) {
        item.quantity++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...item, quantity: 1 });
    }
  }

  render() {
    return (
      <div>
        <Login />
        <Signup />
        <CartPage />
        <ProductPage addToCart={this.addToCart} />
      </div>

    );
  }
}

export default App;
