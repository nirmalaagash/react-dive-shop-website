import {
    ADD_TO_CART, FETCH_PRODCUTS, FILTER_PRODUCTS_BY_GENDER,
    FILTER_PRODUCTS_BY_COLOR, FILTER_PRODUCTS_BY_CATEGORY, FILTER_PRODUCTS_BY_BRAND, FILTER_BUTTON, REMOVE_FROM_CART
} from "../types";

export const fetchProducts = () => async (dispatch) => {
    const res = await fetch("/api/products");
    const data = await res.json();
    dispatch({
        type: FETCH_PRODCUTS,
        payLoad: data,
    });
};

export const filterProductsByGender = (gender) => (dispatch) => {
    dispatch({
        type: FILTER_PRODUCTS_BY_GENDER,
        payLoad: {
            gender: gender,
        },
    });
};

export const filterProductsByColor = (color) => (dispatch) => {
    dispatch({
        type: FILTER_PRODUCTS_BY_COLOR,
        payLoad: {
            color: color,
        },
    });
};

export const filterProductsByCategory = (category) => (dispatch) => {
    dispatch({
        type: FILTER_PRODUCTS_BY_CATEGORY,
        payLoad: {
            category: category,
        },
    });
};

export const filterProductsByBrand = (brand) => (dispatch) => {
    dispatch({
        type: FILTER_PRODUCTS_BY_BRAND,
        payLoad: {
            brand: brand,
        },
    });
};

export const filterButton = (products, props) => (dispatch) => {
    console.log(products);
    console.log(props);
    dispatch({
        type: FILTER_BUTTON,
        payLoad: {
            items: products.filter((product) => {
                return ((props.category === "All" || product.category.indexOf(props.category) >= 0) &&
                    (props.brand === "All" || product.brand.indexOf(props.brand) >= 0) &&
                    (props.color === "All" || product.color.indexOf(props.color) >= 0) &&
                    (props.gender === "All" || product.gender.indexOf(props.gender) >= 0));
            }),
        },
    });
};


export const addToCart = (cartItems, item) => (dispatch) => {
    console.log(localStorage);
    console.log("In Add To Cart");
    let alreadyInCart = false;
    let cItems = null;
    if (!cartItems) {
        cItems = [];
        cItems.push({ product: item, quantity: 1 });
    } else {
        cItems = cartItems.slice();
        cItems.forEach((cartItem) => {
            if (item._id === cartItem.product._id) {
                cartItem.quantity++;
                alreadyInCart = true;
            }
        });
        if (!alreadyInCart) {
            cItems.push({ product: item, quantity: 1 });
        }
    }
    //console.log(cItems);
    dispatch({
        type: ADD_TO_CART,
        payLoad: cItems,
    });
};

export const removeFromCart = (cartItems, item) => (dispatch) => {
    let newCartItems = [];
    cartItems.forEach((cartItem) => {
        if (item.product._id !== cartItem.product._id) {
            newCartItems.push(cartItem);
        }
    });
    dispatch({
        type: REMOVE_FROM_CART,
        payLoad: newCartItems,
    });
};