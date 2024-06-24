import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../interfaces/State';
import { useNavigate } from 'react-router-dom';
import { login } from '../store/reducers/LoginReducer';
type User={
    id:number,
    password:string,
    email:string,
}
export default function Login() {
    const userState=useSelector((state:State)=>state.register);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [user,setUser]=useState<User>({
        id:0,
        email:'',
        password:'',
    })
    useEffect(()=>{
        if(userState){
            setUser({...user,email:userState.email,password:userState.password})
        }
    },[useState])
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target;
        setUser({...user,[name]:value})
    }
    const handleClick=()=>{
        if(user.email===userState.email&&user.password===userState.password){
            navigate('/home');
        }
        dispatch(login(userState))
    }
  return (
    <div>
       <h3>Đăng nhập</h3>
      <form action="" style={{display:'flex',gap:'20px',flexDirection:'column',width:'200px'}}>
      <input onChange={handleChange} value={user.email}  name='email' type="email" placeholder='Nhập email' required />
      <input onChange={handleChange} value={user.password} name='password' type="password" placeholder='Nhập mật khẩu' required /> 
      <button onClick={handleClick} type='submit'>Đăng nhập</button>   
      </form>
    </div>
  )
}
