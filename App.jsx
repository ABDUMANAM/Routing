import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Registration from './Registration'
import Home from './Home'
import Login from './Login'


const App = () => {
  
  return (
    <div>
   <Routes>
   <Route path='/' element={<Registration/>}/>
   <Route path='/login' element={<Login/>}/>
   <Route path='/home' element={<Home/>}/>
   </Routes>
    </div>
  )
}

export default App