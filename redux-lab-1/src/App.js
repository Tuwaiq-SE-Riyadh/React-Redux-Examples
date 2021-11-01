import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { increment, decrement, reset } from "./count";

function App() {

  const [count, setCount] = useState();

  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      count: state.count.count,
    };
  });

  return (
    <div className="App">
            <h1>{state.count}</h1>


      <button
        onClick={() => {
          
          dispatch(increment());
        }}
       >
        +1
      </button>

      <button
        onClick={() => {
          
          dispatch(decrement());
        }}
       >
        -1
      </button>

      <button
        onClick={() => {
          setCount(0);
          dispatch(reset());
        }}
       >
        Reset
      </button>
     
    </div>
  );
}

export default App;
