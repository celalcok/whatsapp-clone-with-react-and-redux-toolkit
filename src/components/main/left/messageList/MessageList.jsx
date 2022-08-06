import React, { useEffect, useState } from 'react'
import "./messageList.css"
import Message from './message/Message'
import {useDispatch, useSelector} from "react-redux"
import {getAllMessages} from "../../../../redux/message/messageSlice"


function MessageList() {

  const dispatch = useDispatch();
  const messageList = useSelector(state => state.message.list)

 
  useEffect(() => {
    dispatch(getAllMessages());
  },[])
  return (
    <div className="message-list">
      {
        messageList.map(message => {
          return <Message 
                    key={message.id}
                    userFrom={message.user.id}
                    profileImg={message.user.image} 
                    name={message.user.name} 
                    message={message.content} 
                    time={message.date} 
                  />
        })
      }
    </div>
  )
}

export default MessageList