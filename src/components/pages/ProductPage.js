import React, { Component } from 'react'
import Header from '../header/Header.js';
import Footer from '../footer/Footer.js';
import Product from '../product/Product';
import { connect } from 'react-redux';
import { fetchProducts } from "../../actions/productActions"

class ProductPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: null,
        };
    }

    componentDidMount() {
        this.props.fetchProducts();
    }


    render() {
        return (
            <div className="container fill">
                <Header className="row" />
                {
                    !this.props.products ? (
                        <div className="login-flex">Loading</div>
                    ) : (
                            <Product products={this.props.products} addToCart={this.props.addToCart} />
                        )
                }
                <Footer className="row" />

            </div>
        )
    }
}

export default connect((state) => ({ products: state.products.items }), {
    fetchProducts,
})(ProductPage)