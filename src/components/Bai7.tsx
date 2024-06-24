import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../interfaces/State'
import { changeFavourist } from '../store/reducers/FavoristUserReducer';

export default function Bai7() {
    const Users=useSelector((state:State)=>state.users);
    const dispatch=useDispatch();
  return (
    <div>
      <h2>List Favourist Users</h2>
      <div style={{width:'200px'}}>
        {Users.map(btn=>(
            <div key={btn.id}>
                <p>Username: {btn.name}</p>
                <p style={{display:'flex'}}>Favourist: <i onClick={()=>dispatch(changeFavourist(btn.id))} className="fa-regular fa-heart" style={{color:btn.status?'red':''}}></i></p>
                <hr />
            </div>
        ))}
      </div>
    </div>
  )
}
