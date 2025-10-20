import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate();
  return (
       <div>
       <h1>Login Page</h1> 
       <button onClick={()=>navigate("/home")}>Click</button>
    </div>
  )
}

export default Login