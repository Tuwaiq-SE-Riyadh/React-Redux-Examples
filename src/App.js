import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { inc, dec, resnt } from "./components/user/count";
import { useState } from "react";

function App() {

  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      count: state.count.count,
    };
  });

  const inc1 = () => {
    const action = inc();
    dispatch(action);
  };

  const dec1 = () => {
    const action = dec();
    dispatch(action);
  };
  const reset1 = () => {
    const action = resnt();
    dispatch(action);
  };

  return (
    <div className="App">
      <p> counter: {state.count}</p>

      
    
      <button onClick={inc1}>inc</button>
      <button onClick={dec1}>inc</button>
      <button onClick={reset1}> Resnt </button>
    
    </div>
  );
}

export default App;
