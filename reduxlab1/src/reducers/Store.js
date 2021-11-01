import { createStore, combineReducers } from "redux";

import user from "./user/user";
// { user } === { user: user }
const reducers = combineReducers({ user });

const store = createStore(reducers);

export default store;