import { createStore, combineReducers } from "redux";

import counter from "./counter/counter";
//import user from "./user/user";
// { user } === { user: user }
const reducers = combineReducers({ counter });

const store = createStore(reducers);

export default store;
