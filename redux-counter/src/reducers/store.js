import { createStore, combineReducers } from "redux";

import counter from "./counter/counter";
// { user } === { user: user }
const reducers = combineReducers( {counter} );

const store = createStore(reducers);

export default store;