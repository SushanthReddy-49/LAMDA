import React from 'react'
import displayImage from "./../images/Shraddha.jpg"

const Chats = () => {
  return (
    <div className='chats'>
      <div className="userChat">
        <img src={displayImage} alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default Chats