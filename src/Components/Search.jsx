import React from 'react'
import displayImage from "./../images/Shraddha.jpg"

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a User' />
      </div>
      <div className="userChat">
        <img src={displayImage} alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search