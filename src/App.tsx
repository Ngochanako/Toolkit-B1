
import React from 'react'
import Bai1 from './components/Bai1'
import Bai2 from './components/Bai2'
import Bai3 from './components/Bai3'
import Bai4 from './components/Bai4'
import Bai5 from './components/Bai5'
import Bai7 from './components/Bai7'
import { Routes,Route } from 'react-router-dom'
import Bai8 from './components/Bai8'
import Login from './components/Login'
export default function App() {
  return (
    <div>
      <Bai1/>
      <Bai2/>
      <Bai3/>
      <Bai4/>
      <Bai5/>
      <Bai7/>
      <Routes>
        <Route path='/' element={<Bai8/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}
