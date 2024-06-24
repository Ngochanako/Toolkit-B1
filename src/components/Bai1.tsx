import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../interfaces/State';
import { decrease, increase, reset } from '../store/reducers/CountReducer';

export default function Bai1() {
    const count=useSelector((state:State)=>state.count);
    const dispatch=useDispatch();
  return (
    <div>
      <p>Count:{count}</p>
      <button onClick={()=>dispatch(increase())}>Increase</button>
      <button onClick={()=>dispatch(decrease())}>Decrease</button>
      <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  )
}
