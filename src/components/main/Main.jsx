import React from 'react'
import LeftTop from './left/top/LeftTop'
import UserList from './left/messageList/MessageList'
import MessageContainer from './right/messageContainer/MessageContainer'
import RightBottomBar from "./right/rightbottomBar/RightBottomBar"
import RightTopBar from "./right/rightTopBar/RightTopBar"
import "./main.css"
import Status from '../status/Status'
import Profile from './left/profile/Profile'
import NewChat from './left/newChat/NewChat'


function Main() {

  return (
    <div className='main'>
      
        <NewChat/>
        <Profile/>
        <LeftTop/>
        <UserList />
        <RightTopBar />
        <MessageContainer/>
        <RightBottomBar />
        <Status/>
    </div>
  )
}

export default Main