import "./App.css";
import { createContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import counter from "./reducers/counter/counter";
import { increment, decrement } from "./reducers/counter/counter";

function App() {
  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      counter: state.counter.counter,
    };
  });
  let c = state.counter;
  console.log(state.counter);

  // console.log(counter);
  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={() => {
            let inc = counter;
            setCounter(++inc);
            dispatch(increment(inc));
          }}
        >
          increment
        </button>
        <h1>{c}</h1>
        <button
          onClick={() => {
            console.log(counter);
            let dec = counter;
            setCounter(--dec);
            dispatch(decrement(dec));
          }}
        >
          decrement
        </button>
      </header>
    </div>
  );
}

export default App;
