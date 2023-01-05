import React from 'react'
import AddImage from "../images/addAvatar.png"
const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>SMASH Chat</span>
            <span className='title'>Register</span>
            <form action="">
                <input type="text" placeholder='Display Name' />
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <input style={{display:"none"}} type="file" id='file'/>
                <label htmlFor="file">
                    <img src={AddImage} alt="Add Avatar" />
                    <span>Add an Avatar</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p>Already have an account? Login Here.</p>
        </div>
    </div>
  )
}

export default Register