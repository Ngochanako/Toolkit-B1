import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../interfaces/State'
import { add } from '../store/reducers/ListNumberReducer';

export default function Bai2() {
    const list =useSelector((state:State)=>state.listNumber);
    const dispatch=useDispatch();
  return (
    <div>
      <p>List Number: [{list.join(',') }]</p>
      <button onClick={()=>dispatch(add())}>Random Number</button>
    </div>
  )
}
