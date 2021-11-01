import { createStore, combineReducers } from "redux";

import Counter from "./counter/Counter";

const reducers = combineReducers({ Counter });

const store = createStore(reducers);

export default store;
