import React from 'react'
import AddImage from "../images/addAvatar.png"
const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>SMASH Chat</span>
            <span className='title'>Login</span>
            <form action="">
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <button>Sign In</button>
            </form>
            <p>Do not have an account? Sign Up.</p>
        </div>
    </div>
  )
}

export default Login