import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { addCounter, clearCounter, decCounter } from "./reducers/counter/counter";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      counter: state.counter.counter,
    };
  });

  const add = () => {
    setCounter(counter+1)

    const newCount = {
       counter: counter+1 ,
    }

    const action = addCounter(newCount);


    dispatch(action);
  };

  const dec = () => {
    setCounter(counter-1)

    const newCount = {
       counter: counter-1 ,
    }

    const action = decCounter(newCount);

    dispatch(action);
  };

console.log(state.counter.counter);
  return (
    <div className="App">
      {/* <p> name: {state.user.name}</p>
      <p> id: {state.user.id}</p> */}
      <p>Counter: {state.counter.counter}</p>
      
      <button onClick={add}>Add</button>
      <button  onClick={dec}> Decrements </button>
      <button
        onClick={() => {
          dispatch(clearCounter());
        }}
      >
        Clear
      </button>
    </div>
  );
}

export default App;
