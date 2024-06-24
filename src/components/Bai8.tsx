import React, { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
type User={
    id:number,
    password:string,
    email:string,
}
export default function Bai8() {
    const [user,setUser]=useState<User>({
        id:Math.floor(Math.random()*100000000),
        password:'',
        email:'',
    })
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
         const {name,value}=e.target;
        setUser({...user,[name]:value})
    }
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleClick=(e:FormEvent)=>{
        e.preventDefault();
       dispatch({
        type:'REGISTER',
        payload:user,
       })
       navigate('/login');
    }
  return (
    <div >
      <h3>Đăng ký</h3>
      <form action=""style={{display:'flex',gap:'20px',flexDirection:'column',width:'200px'}}>
      <input onChange={handleChange} name='email' type="email" placeholder='Nhập email' required />
      <input onChange={handleChange} name='password' type="password" placeholder='Nhập mật khẩu' required /> 
      <button onClick={handleClick} type='submit'>Đăng ký</button>   
      </form>
    </div>
  )
}
