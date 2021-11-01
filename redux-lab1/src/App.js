import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { incrementCounter, resetCounter, decrementCounter } from "./reducers/user/counter";
// import { useState } from "react";

function App() {
  // const[myValue, setmyValue] = useState(0);
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      counter: state.counter.counter,
    };
  });

  const increase = () => {
    const action = incrementCounter();
    dispatch(action);
    };

    // const change = (e) => {
    //   setmyValue(e.target.value)
    // }


  return (
    <div className="App">
      <p> Counter: {state.counter}</p>

      <button onClick={increase}>Increment</button>
      
      <button
        onClick={() => {
          dispatch(resetCounter());
        }}
      >
        Reset
      </button>

      <button
        onClick={() => {
          dispatch(decrementCounter());
        }}
      >
        Decrement
      </button>
        {/* <br/><br/>
        <button onClick={}>IncrementBy</button>

        <input onChange={change} type="text"/>
        <button>DecrementBy</button> */}


    </div>
  );
}

export default App;
