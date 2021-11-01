import {createStore , combineReducers } from "redux"

import number from "./counter/numbers"

const reducers = combineReducers({ number });
const store = createStore(reducers);

export default store;

