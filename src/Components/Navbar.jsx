import React from 'react'
import displayImage from "./../images/Shraddha.jpg"
const Navbar = () => {
  return (
    <div className='navbar'>
      <span>LAMDA Chat</span>
      <div className="user">
        <img src={displayImage} alt=''/>
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar