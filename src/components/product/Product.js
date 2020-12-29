import React, { Component } from 'react'
import Filter from '../filter/Filter'
import { connect } from 'react-redux';
import {
    fetchProducts, filterProductsByBrand,
    filterProductsByCategory, filterProductsByColor, filterProductsByGender,
    addToCart
} from "../../actions/productActions";

class Product extends Component {

    render() {
        return (
            < div className="container" >
                <div className="row">
                    <div className="col-lg-2">
                        <Filter
                        />
                    </div>
                    <div className="col-lg-10">
                        <div class="product-category">Our products</div>
                        <ul className="products">
                            {this.props.items.map(product => (
                                <li key={product._id}>
                                    <div className="product">
                                        <a href="#">
                                            <img src={product.imgLocation} alt={product.name}></img>
                                            <p>{product.name}</p>
                                        </a>
                                        <div className="product-price">
                                            <div>
                                                ${product.price}
                                            </div>
                                            <button className="btn btn-primary" onClick={() => this.props.addToCart(this.props.cartItems, product)}>Add to Cart</button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div >
        )
    }
}

export default connect((state) => ({
    products: state.products.products,
    category: state.products.category,
    gender: state.products.gender,
    brand: state.products.brand,
    color: state.products.color,
    items: state.products.items,
    cartItems: state.products.cartItems,
}), {
    fetchProducts,
    filterProductsByGender,
    filterProductsByColor,
    filterProductsByBrand,
    filterProductsByCategory,
    addToCart,
})(Product);
