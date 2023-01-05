import React from 'react'
import Cam from "../images/addAvatar.png"
import Add from "../images/addAvatar.png"
import More from "../images/addAvatar.png"

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Chat