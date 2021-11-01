import './App.css';


import { useDispatch, useSelector } from "react-redux";
import { Increment, decrement,reset } from "./reducers/counter/counter";
import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      count: state.counter.count
    };
  });

  const inc = () => {
    setCount(count+1)
    const newCount = count+1
    const action = Increment(newCount);
    dispatch(action)
  }

  const dec = () => {
    setCount(count-1)
    const newCount = count-1
    const action = decrement(newCount);
    dispatch(action)
  }
  const rest = () => {
    setCount(0)
    const action = reset();
    dispatch(action)
  }
  return (
    <div className="App">
      <h4>Counter:</h4>
      <p>{state.count}</p>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
      <button onClick={rest}>reset</button>
    </div>
  );
}

export default App;
