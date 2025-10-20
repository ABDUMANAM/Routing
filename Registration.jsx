import React from 'react'
import { useNavigate } from 'react-router-dom'

const Registration = () => {

    const navigate=useNavigate()

  return (
    <div>
       <h1>Registration Page</h1> 
       <button onClick={()=>navigate("/login")}>Click</button>
    </div>
  )
}

export default Registration