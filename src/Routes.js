import React from "react";
import {
    Route,
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import ProductPage from "./components/pages/ProductPage";
import CartPage from "./components/pages/CartPage";
import Login from "./components/login/Login";
import Signup from "./components/login/Signup";

const Routes = (props) => (
    <Router {...props}>
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/products">
                <ProductPage />
            </Route>
            <Route path="/cart">
                <CartPage />
            </Route>
            <Route path="/signup">
                <Signup />
            </Route>
            <Route path="/logout">
                <Login />
            </Route>
        </Switch>
    </Router>
)

export default Routes;