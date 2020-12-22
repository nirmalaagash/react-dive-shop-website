import React, { Component } from 'react'
import data from '../../data.json';
import Cart from '../cart/Cart';
import Header from "../header/Header";
import Footer from "../footer/Footer";


export default class CartPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: data.products,
            cartItems: [
                {
                    product: data.products[0],
                    quantity: 1
                },
                {
                    product: data.products[1],
                    quantity: 2
                }
            ],
        };
    }

    removeItem(item) {
        console.log(this.state);
        let newCartItems = [];
        this.state.cartItems.forEach((cartItem) => {
            if (item._id !== cartItem._id) {
                newCartItems.push(cartItem);
            }
        });
        this.setState({
            cartItems: newCartItems
        });
    }

    render() {
        return (
            <div>
                <Header />
                <Cart cartItems={this.state.cartItems} removeItem={this.removeItem.bind(this)} />
                <Footer />
            </div>

        )
    }
}
