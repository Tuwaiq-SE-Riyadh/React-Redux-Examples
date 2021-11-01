import { createStore, combineReducers } from "redux";

import counter from "./user/user";
// { user } === { user: user }
const reducers = combineReducers({ counter });

const store = createStore(reducers);

export default store;
