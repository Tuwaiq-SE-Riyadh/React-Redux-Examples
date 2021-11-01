import { useState, useEffect } from "react";
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./reducers/counter/counter";



function App() {
  const [num, setNum] = useState(0);
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      counter: state.counter.counter,
    };
  });

  function IncrementApp(){
    setNum(num + 1);
      
    const action = increment(num + 1);
    dispatch(action);
  }

  function DecrementApp(){
    setNum(num - 1);
      
    const action = decrement(num - 1);
    dispatch(action);
  }

  function ResetApp(){
    setNum(0);
      
    const action = reset();
    dispatch(action);
  }


  return( 
    <div>
      <h1>{state.counter.con}</h1>
      <button onClick={IncrementApp}>Increment</button>
      <button onClick={DecrementApp}>Decrement</button>
      <button onClick={ResetApp}>Reset</button>
    </div>

   
  );
 
}

export default App;

