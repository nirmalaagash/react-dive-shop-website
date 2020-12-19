import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        return (
            <div>
                <ul className="products">
                    {this.props.products.map(product => (
                        <li key={product._id}>
                            <div className="product">
                                <a href="#">
                                    <img src={product.imgLocation} alt={product.name}></img>
                                    <p>{product.name}</p>
                                </a>
                                <div className="product-price">
                                    <div>
                                        {product.price}
                                    </div>
                                    <button className="btn btn-primary">Add to Cart</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
