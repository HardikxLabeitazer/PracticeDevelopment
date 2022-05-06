import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk";
import reducers from "./reducers";
export const store = (reducers,{},applyMiddleware(thunk))