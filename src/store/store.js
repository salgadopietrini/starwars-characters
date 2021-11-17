import { starwarsReducer } from "./starwarsReducer/starwarsReducer";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

let store = createStore(starwarsReducer, composedEnhancer);
export default store;
