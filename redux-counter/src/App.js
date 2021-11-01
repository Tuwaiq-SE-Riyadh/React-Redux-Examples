import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { dec, res, inc } from "./reducers/counter/counter";
import { useState } from "react";


function App() {


  const dispatch = useDispatch();
  
  const state = useSelector((state) => {
    return {
      counter: state.counter.counter,
    };
  });

  return (
    <div className="App">
     <p> Counter: {state.counter}</p>


 <button onClick={()=> {
   dispatch(res());
 }}> RESET</button>
     

     <button onClick={()=> {
   dispatch(dec());
 }}> Decrement</button>

<button onClick={()=> {
   dispatch(inc());
 }}> increment</button>
     
    </div>
  );
}

export default App;
