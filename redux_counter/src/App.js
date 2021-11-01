import logo from './logo.svg';
import './App.css';

import {useDispatch, useSelector } from "react-redux"
import {plusOne, minusOne, reset } from "./reducers/counter/numbers"
import { useState } from "react"

function App() {
  // const [num , setNum] = useState(0)

  const dispatch = useDispatch();

  const state = useSelector((state) => {
    // console.log(state)
    return {
      number: state.number.number,
    };
  });

  const add = () => {
    // const action = plusOne();
    // dispatch(action);

    // or this chortcut 
    dispatch(plusOne());
  };

  const minus = ()=>{
    // const action = minusOne();
    // dispatch(action);

    // or this chortcut 
    dispatch(minusOne());
  }

  const resetData = ()=>{
    const action = reset()
    dispatch(action)
  }


  return (
    <div className="App">
        <h1>Counter : {state.number}</h1>
        <button onClick={add}>plus One</button>
        <button onClick={minus}>Minus one</button>
        <button onClick={resetData}>Reset</button>
    </div>
  );
}

export default App;
