import React, { Component } from 'react'
import Filter from '../filter/Filter'

export default class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: props.products,
            gender: "All",
            color: "All",
            category: "All",
            brand: "All",
            functions: {
                gc: this.genderChange,
                colorc: this.colorChange,
                bc: this.brandChange,
                categoryc: this.categoryChange,
                filterButton: this.filterButton
            }
        }
        this.genderChange.bind(this);
        this.brandChange.bind(this);
        this.colorChange.bind(this);
        this.categoryChange.bind(this);
    }

    genderChange = (event) => {
        console.log(event.target.value);
        this.setState({
            gender: event.target.value
        }, () => console.log(this.state));

    }

    colorChange = (event) => {
        console.log(event.target.value);
        this.setState({
            color: event.target.value
        });
    }

    brandChange = (event) => {
        console.log(event.target.value);
        this.setState({
            brand: event.target.value
        });
    }

    categoryChange = (event) => {
        console.log(event.target.value);
        this.setState({
            category: event.target.value
        });
        console.log(this.state);
    }

    filterButton = (event) => {
        this.setState({
            products: this.props.products.filter((product) => {
                console.log(((this.state.category === "All")));
                return ((this.state.category === "All" || product.category.indexOf(this.state.category) >= 0) &&
                    (this.state.brand === "All" || product.brand.indexOf(this.state.brand) >= 0) &&
                    (this.state.color === "All" || product.color.indexOf(this.state.color) >= 0) &&
                    (this.state.gender === "All" || product.gender.indexOf(this.state.gender) >= 0));
            }

            )
        });
    }

    render() {
        return (
            < div className="container" >
                <div className="row">
                    <div className="col-lg-2">
                        <Filter products={this.state.products}
                            gender={this.state.gender}
                            brand={this.state.brand}
                            color={this.state.color}
                            category={this.state.category}
                            functions={this.state.functions}
                        />
                    </div>
                    <div className="col-lg-10">
                        <div class="product-category">{this.state.category} products</div>
                        <ul className="products">
                            {this.state.products.map(product => (
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
                                            <button className="btn btn-primary" onClick={() => this.props.addToCart(product)}>Add to Cart</button>
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
