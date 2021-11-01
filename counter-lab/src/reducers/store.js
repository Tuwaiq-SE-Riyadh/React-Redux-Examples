import { createStore, combineReducers} from "redux";
import FunCounter from "./user/count";




const reducers = combineReducers({FunCounter});

const store = createStore(reducers);

export default store;