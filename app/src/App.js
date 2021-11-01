import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { addNumber, clearNumber, updateNumber } from "./reducers/counter"
import { useState } from "react";

function App() {

  
  const [number, setNumber] = useState(0);
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      counter: state.counter.counter,
    };
  });



  const decrement = () => {
    setNumber(number - 1);

    const newUser = {
      number: number - 1,
    };

    const action = addNumber(newUser);
    dispatch(action);
  };

  const increment = () => {
    setNumber(number + 1);

    const newUser = {
      number: number + 1,
    };

    const action = addNumber(newUser);
    dispatch(action);
  };

  return (
    <div className="App">

     

      <button onClick={increment}>increment</button>
      <h1>   {state.counter.number}</h1>
      <button onClick={decrement}>decrement</button>
      <button
        onClick={() => {
          setNumber(0);
          dispatch(clearNumber(0));
        }}
      >
        reset
      </button>
    
    </div>
  );
}

export default App;
