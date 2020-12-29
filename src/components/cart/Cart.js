import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    addToCart, removeFromCart
} from "../../actions/productActions";

class Cart extends Component {

    render() {
        let sum = 0;
        return (
            <div>
                {!this.props.cartItems ? (<div>Your cart is Loading</div>) :
                    (
                        <div>
                            <div className="cart-name">Your Cart</div>
                            <div className="cart-page">
                                <ul className="cart-items">
                                    {this.props.cartItems.map(item => (
                                        < li className="cart-item" >
                                            <img src={item.product.imgLocation} alt={item.product.name}></img>
                                            <div className="product-name"><b>{item.product.name}</b></div>
                                            <div className="quantity-price">
                                                <div>Quantity: {item.quantity}</div>
                                                <div>Price: ${item.quantity * parseFloat(item.product.price)}</div>
                                                <button className="btn btn-default" onClick={() => this.props.removeFromCart(this.props.cartItems, item)}>Remove</button>
                                            </div>

                                        </li>
                                    ))
                                    }
                                </ul>
                            </div>
                            <div className="cart-total">Total: ${this.props.cartItems.reduce((sum, item) => sum + item.quantity * parseFloat(item.product.price), 0)}</div>
                        </div>
                    )
                }

            </div >
        )
    }
}

export default connect((state) => ({
    cartItems: state.products.cartItems,
}), {
    addToCart,
    removeFromCart,
})(Cart);