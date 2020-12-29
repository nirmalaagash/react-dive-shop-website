import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "./reducers/productReducers";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        products: productsReducer,
    }),
    persistedState,
    composeEnhancer(applyMiddleware(thunk))
);

store.subscribe(() => {
    saveState(store.getState())
})

export default store;