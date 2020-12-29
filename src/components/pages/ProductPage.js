import React, { Component } from 'react'
import Header from '../header/Header.js';
import Footer from '../footer/Footer.js';
import Product from '../product/Product';
import { connect } from 'react-redux';
import { fetchProducts } from "../../actions/productActions"

class ProductPage extends Component {

    componentDidMount() {
        if (!this.props.items)
            this.props.fetchProducts();
    }


    render() {
        return (
            <div>
                <Header className="row" />
                {
                    !this.props.items ? (
                        <div className="login-flex">Loading</div>
                    ) : (
                            <Product />
                        )
                }
                <Footer className="row" />

            </div>
        )
    }
}

export default connect((state) => ({ items: state.products.items }), {
    fetchProducts,
})(ProductPage)