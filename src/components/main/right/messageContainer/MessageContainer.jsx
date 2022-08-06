import React, { useEffect } from 'react'
import "./messageContainer.css"
import {useDispatch, useSelector} from "react-redux"
import {getMessagesByUser} from "../../../../redux/message/messageSlice"

function MessageContainer() {

  const dispatch = useDispatch()
  const messagesByUser = useSelector(state => state.message.listByUser)
  const m = useSelector(state => state.message.list)
  const userId = useSelector(state => state.message.userId)
  
  useEffect(()=>{
    dispatch(getMessagesByUser(userId));
  },[userId])
  return (
    <div className="message-container">
      {messagesByUser.map(message =>{
        return <p key={message.id} className="text-row"><span className="text">{message.content}</span></p>
      })}
    </div>
  )
}

export default MessageContainer