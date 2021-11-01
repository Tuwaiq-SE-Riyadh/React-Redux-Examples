import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {updatCounter ,updatCounterdec} from "./reducers/user/user";

function App() {

  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      user: state.user.user,
    };
  });
  console.log(state.user)
  return (
    <div className="App" >
      <h1>Hello</h1>
      <p><h3>Counter :{state.user.counter} </h3></p>
      <p><button 
      onClick={() => {
        dispatch(updatCounter());
      }}>+</button> <button onClick={() => {
        dispatch(updatCounterdec());
      }}>-</button></p>
      

    </div>
  );
}

export default App;
