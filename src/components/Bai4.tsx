import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../interfaces/State'
import { changeDisplay } from '../store/reducers/DisplayReducer';

export default function Bai4() {
    const display=useSelector((state:State)=>state.display);
    const dispatch=useDispatch();
  return (
    <div>
      <button style={{marginTop:'50px'}} onClick={()=>dispatch(changeDisplay())}>List mode</button>
      <div className={display}>
        <div className='b4'>1</div>
        <div className='b4'>2</div>
        <div className='b4'>3</div>
        <div className='b4'>4</div>
      </div>
    </div>
  )
}
