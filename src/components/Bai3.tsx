import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../interfaces/State'
import { change } from '../store/reducers/ColorReducer';
export default function Bai3() {
    const colorState=useSelector((state:State)=>state.color);
    
    const dispatch=useDispatch();
    const handleClick=()=>{
        dispatch(change());
    }
  return (
    <div style={{border:`1px solid ${colorState.color}`,width:'200px',height:'200px',display:'flex',justifyContent:'center',alignItems:'center',marginTop:'50px',backgroundColor:colorState.background}}>
      <button onClick={handleClick} style={{border:`1px solid ${colorState.color}`,padding:'5px'}}>{colorState.text}</button>
    </div>
  )
}
