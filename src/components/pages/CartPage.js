import React, { Component } from 'react'
import data from '../../data.json';
import Cart from '../cart/Cart';
import Header from "../header/Header";
import Footer from "../footer/Footer";


export default class CartPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Cart />
                <Footer />
            </div>

        )
    }
}
