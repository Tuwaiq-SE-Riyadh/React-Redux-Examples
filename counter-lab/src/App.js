import logo from './logo.svg';
import './App.css';
import {addOne,minusOne, clearCounter, multiplyByNum} from "./reducers/counter/count"
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';


function App() {
  const [num , setNumber] = useState()
  const dispatch = useDispatch()

  const state = useSelector((state)=>{
    return{
      count: state.FunCounter.count
    }
  })
  return (
    <>
    <div className="page">
    <p>{state.count}</p>
    <input type="number" onChange={(e)=>{
      setNumber(e.target.value)
    }}/>
    <input type="button" value="Add One" onClick={()=>{
      dispatch(addOne())
    }}/>
    <input type="button" value="Minus One" onClick={()=>{
      dispatch(minusOne())}}/>
    <input type="button" value="Clear Counter" onClick={()=>{
      dispatch(clearCounter())}}/>
      <input type="button" value="Multiply By chosen Number" onClick={()=>{
      dispatch(multiplyByNum(num))}}/>
      </div>
    </>
  );
}

export default App;
