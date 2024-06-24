import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../interfaces/State'
import { reset } from '../store/reducers/CountReducer';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const user=useSelector((state:State)=>state.login)
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const handleClick=()=>{
        dispatch(reset());
        navigate('/login')
    }
  return (
    <div>
      <h2>Trang chủ</h2>
      <p>Email người dùng: {user.email}</p>
      <button onClick={handleClick}>Đăng xuất</button>
    </div>
  )
}
