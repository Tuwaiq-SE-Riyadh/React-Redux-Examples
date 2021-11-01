import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { decr, incr, reset } from "./reducers/counter/Counter";
function App() {
  const [counter, setCounter] = useState(0);

  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      c: state.Counter.counter,
    };
  });

  const inc = () => {
    setCounter(counter + 1);

    const newC = {
      counter: counter + 1,
    };
    dispatch(incr(newC));
  };

  const dec = () => {
    setCounter(counter - 1);

    const newC = {
      counter: counter - 1,
    };
    dispatch(decr(newC));
  };
  

  const res = () => {
    setCounter(0);
    
    dispatch(reset());
  }


  return (
    <div className="App">

      <p> Counter: {state.c.counter}</p>
      <button onClick={inc}>INCREMENT</button>
      <button onClick={dec}>DECREMENT</button>
      <button onClick={res}>RESET</button>
    </div> 
  );
}

export default App;
