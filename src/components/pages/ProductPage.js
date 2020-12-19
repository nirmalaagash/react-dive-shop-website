import React, { Component } from 'react'
import Header from '../header/Header.js';
import Footer from '../footer/Footer.js';
import data from '../../data.json';
import Product from '../product/Product';

export default class ProductPage extends Component {

    constructor() {
        super();
        this.state = {
            products: data.products,
        };
    }


    render() {
        return (
            <div className="container fill">
                <Header className="row" />
                <Product products={this.state.products} />
                <Footer className="row" />
            </div>
        )
    }
}
