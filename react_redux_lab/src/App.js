
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { decrement,increment,reset } from "./reducers/counter/counter";
import { useState } from "react";


function App() {
  const [counter, setCounter] = useState(0);

  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      counter:state.counter.counter,
    };
  })

  const add = () => {
    setCounter(counter + 1);

    const newCounter = {
      counter: counter + 1,
    };

    const action = increment(newCounter);

    // {
    //   type: "ADD_USER",
    //   payload: {
    //     id: 2,
    //     name: "Jane"
    //   },
    // }

    dispatch(action);
  };

  const remove = () => {
    setCounter(counter - 1);

    const newCounter = {
      counter: counter - 1,
    };

    const action = decrement(newCounter);

    // {
    //   type: "ADD_USER",
    //   payload: {
    //     id: 2,
    //     name: "Jane"
    //   },
    // }

    dispatch(action);
  };

  return (
    <div className="App">
      <p> counter: {state.counter.counter}</p>
      <button onClick={add}>+</button>
      <button onClick={remove}>-</button>
      <button
        onClick={() => {
          setCounter(0);
          dispatch(reset());
        }}
      >
        Clear
      </button>
    </div>
  );
}

export default App;
