import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {decrement,increment,reset} from "./reducers/counter/counter";

function App() {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <div className="App">
     
      <h3>Counter</h3>
      <h3>{counter}</h3>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>

        </div>
      
      
     
    
  );
 }

export default App;