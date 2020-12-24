import { FETCH_PRODCUTS } from "../types";

export const productsReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_PRODCUTS:
            return { items: action.payLoad };
        default:
            return state;
    }
}