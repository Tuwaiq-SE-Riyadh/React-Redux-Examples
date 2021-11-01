import { createStore, combineReducers } from "redux";

import count from "./user/count";
const reducers = combineReducers( {count} );

const store = createStore(reducers);

export default store;
