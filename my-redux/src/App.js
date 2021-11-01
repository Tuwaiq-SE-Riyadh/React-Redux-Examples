import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "./reducers/user/count";

function App() {
  const count = useSelector((state) => state.count);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter is : </h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
}

export default App;
