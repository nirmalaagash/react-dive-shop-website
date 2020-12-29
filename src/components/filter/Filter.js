import React, { Component } from 'react'
import { connect } from 'react-redux';
import { filterButton, fetchProducts, filterProductsByBrand, filterProductsByCategory, filterProductsByColor, filterProductsByGender } from "../../actions/productActions";

class Filter extends Component {

    componentDidMount() {
        this.props.filterProductsByCategory("All");
        this.props.filterProductsByColor("All");
        this.props.filterProductsByBrand("All");
        this.props.filterProductsByGender("All");
    }

    render() {
        //console.log(this.props);
        return (
            <div>
                {
                    !this.props.items ?
                        (<div>Loading...</div>) :
                        (<div className="filter">
                            <h3 style={{ "fontWeight": "bold" }}><div className="glyphicon glyphicon-filter"></div> Filter items</h3>
                            <div className="filter-item">Showing results of {this.props.items.length}</div>
                            <div className="filter-item"><div className="filterName">Category</div>
                                <select value={this.props.category} onChange={(e) => this.props.filterProductsByCategory(e.target.value)}>
                                    <option value="All">All</option>
                                    <option value="snorkel-combos">Snorkel Combos</option>
                                    <option value="snorkel-sets">Snorkel Sets</option>
                                    <option value="snorkel-dive-fin">Snorkel Dive Fins</option>
                                    <option value="snorkel-mask">Snorkel Mask</option>
                                    <option value="swim-goggles-mask">Swim Googles Mask</option>
                                </select>
                            </div>
                            <div className="filter-item"><div className="filterName">Gender</div>
                                <select value={this.props.gender} onChange={(e) => this.props.filterProductsByGender(e.target.value)}>
                                    <option value="All">All</option>
                                    <option value="Unisex">Unisex</option>
                                    <option value="Men">Men</option>
                                    <option value="Women">Women</option>
                                    <option value="Kids">Kids</option>
                                </select>
                            </div>
                            <div className="filter-item"><div className="filterName">Brand</div>
                                <select value={this.props.brand} onChange={(e) => this.props.filterProductsByBrand(e.target.value)}>
                                    <option value="All">All</option>
                                    <option value="Aqua Lungs">Aqua Lungs</option>
                                    <option value="US Divers">US Divers</option>
                                    <option value="Wildhorn">Wildhorn</option>
                                    <option value="Aqua Sphere">Aqua Sphere</option>
                                    <option value="TVR">TVR</option>
                                    <option value="Phelps">Phelps</option>
                                </select>
                            </div>
                            <div className="filter-item"><div className="filterName">Color</div>
                                <select value={this.props.color} onChange={(e) => this.props.filterProductsByColor(e.target.value)}>
                                    <option value="All">All</option>
                                    <option value="black">Black</option>
                                    <option value="green">Green</option>
                                    <option value="white">White</option>
                                    <option value="blue">Blue</option>
                                    <option value="red">Red</option>
                                </select>
                            </div>
                            <div className="filter-item-button">
                                <button className="btn btn-success" onClick={(e) => this.props.filterButton(this.props.products, this.props)}>Filter</button>
                            </div>
                        </div>)
                }
            </div>
        )
    }
}

export default connect((state) => ({
    products: state.products.products,
    gender: state.products.gender,
    brand: state.products.brand,
    color: state.products.color,
    category: state.products.category,
    items: state.products.items,
}), {
    fetchProducts,
    filterProductsByGender,
    filterProductsByColor,
    filterProductsByBrand,
    filterProductsByCategory,
    filterButton
})(Filter);
