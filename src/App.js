import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./reducers/user/user";


function App() {
 

  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      // user: state.user.user,
      counter: state.counter.counter,
    };
  });

 


  return (
    <div className="App">
      <p> counter: {state.counter}</p>
      <button
        onClick={() => {
       
          dispatch(increment());
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrement
      </button>

      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
      reset
      </button>
    </div>
  );
}

export default App;
