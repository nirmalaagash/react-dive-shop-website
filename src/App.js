import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Routes from "./Routes";


class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          <Routes />
          {/* <Login />
          <Signup />
          <CartPage />
          <ProductPage addToCart={this.addToCart} /> */}
        </div>
      </Provider>
    );
  }
}

export default App;
