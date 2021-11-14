import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./reducers/counter/counter";
import { useState } from "react";

function App() {
  const [user, setUser] = useState();
  const [id, setId] = useState(0);

  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      counter: state.counter.counter,
    };
  });

  // const add = () => {
  //   setId(id + 1);

  //   const newUser = {
  //     id: id + 1,
  //     name: user,
  //   };

  //   const action = addUser(newUser);

  //   // {
  //   //   type: "ADD_USER",
  //   //   payload: {
  //   //     id: 2,
  //   //     name: "Jane"
  //   //   },
  //   // }

  //   dispatch(action);
  // };

  return (
    <div className="App">
      <p> name: {state.counter}</p>
      
      

     
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
