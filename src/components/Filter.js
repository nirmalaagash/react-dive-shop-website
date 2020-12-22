import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        //console.log(this.props);
        return (
            <div className="filter">
                <h3 style={{ "fontWeight": "bold" }}><div className="glyphicon glyphicon-filter"></div> Filter items</h3>
                <div className="filter-item">Showing results of {this.props.products.length}</div>
                <div className="filter-item"><div className="filterName">Category</div>
                    <select value={this.props.category} onChange={this.props.functions.categoryc}>
                        <option value="All">All</option>
                        <option value="snorkel-combos">Snorkel Combos</option>
                        <option value="snorkel-sets">Snorkel Sets</option>
                        <option value="snorkel-dive-fin">Snorkel Dive Fins</option>
                        <option value="snorkel-mask">Snorkel Mask</option>
                        <option value="swim-goggles-mask">Swim Googles Mask</option>
                    </select>
                </div>
                <div className="filter-item"><div className="filterName">Gender</div>
                    <select value={this.props.gender} onChange={this.props.functions.gc}>
                        <option value="All">All</option>
                        <option value="Unisex">Unisex</option>
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                        <option value="Kids">Kids</option>
                    </select>
                </div>
                <div className="filter-item"><div className="filterName">Brand</div>
                    <select value={this.props.brand} onChange={this.props.functions.bc}>
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
                    <select value={this.props.color} onChange={this.props.functions.colorc}>
                        <option value="All">All</option>
                        <option value="black">Black</option>
                        <option value="green">Green</option>
                        <option value="white">White</option>
                        <option value="blue">Blue</option>
                        <option value="red">Red</option>
                    </select>
                </div>
                <div className="filter-item-button">
                    <button className="btn btn-success" onClick={this.props.functions.filterButton}>Filter</button>
                </div>
            </div>

        )
    }
}
