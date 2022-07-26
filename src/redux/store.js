import {applyMiddleware, createStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from "./rootreducer";
import thunk from "redux-thunk";

// const rootreducer = combineReducers({cakeReducer, IceCreamReducer})
const store = createStore(rootReducer, applyMiddleware( thunk));

export default store;

