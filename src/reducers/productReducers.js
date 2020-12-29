import {
    REMOVE_FROM_CART, FETCH_PRODCUTS, FILTER_PRODUCTS_BY_BRAND,
    FILTER_PRODUCTS_BY_CATEGORY, FILTER_PRODUCTS_BY_COLOR, FILTER_PRODUCTS_BY_GENDER, FILTER_BUTTON, ADD_TO_CART
} from "../types";

export const productsReducer = (state = {
}, action) => {
    switch (action.type) {
        case FETCH_PRODCUTS:
            return {
                items: action.payLoad,
                products: action.payLoad,
            };
        case FILTER_PRODUCTS_BY_BRAND:
            return {
                ...state,
                brand: action.payLoad.brand,
            }
        case FILTER_PRODUCTS_BY_CATEGORY:
            return {
                ...state,
                category: action.payLoad.category,
            }
        case FILTER_PRODUCTS_BY_COLOR:
            return {
                ...state,
                color: action.payLoad.color,
            }
        case FILTER_PRODUCTS_BY_GENDER:
            return {
                ...state,
                gender: action.payLoad.gender,
            }
        case FILTER_BUTTON:
            return {
                ...state,
                items: action.payLoad.items,
            }
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: action.payLoad,
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: action.payLoad,
            }
        default:
            return state;
    }
}