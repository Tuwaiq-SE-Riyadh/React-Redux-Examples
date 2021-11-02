import { createStore, combineReducers} from "redux";
import FunCounter from "./counter/count";




const reducers = combineReducers({FunCounter});

const store = createStore(reducers);

export default store;