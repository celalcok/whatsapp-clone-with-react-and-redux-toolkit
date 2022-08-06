import React from 'react'
import {BiChevronDown} from "react-icons/bi"
import "./message.css"
import {useDispatch, useSelector} from "react-redux"
import {getAllUsers} from "../../../../../redux/user/userSlice"
import { getMessagesByUser} from "../../../../../redux/message/messageSlice"



function Message({userFrom,profileImg,name, message,time}) {

  const dispatch = useDispatch()
  const handleGetMessagesByUser =(userId)=>{
    dispatch(getMessagesByUser(userId))
  }
  return (
    <div className="message" onClick={()=>handleGetMessagesByUser(userFrom)}>
        <img src={profileImg?profileImg:"http://alz.org.tr/wp-content/uploads/2021/06/nopic.png"} alt="" className="message-user-profile-img" />
        <div className="message-user-info">
            <p className="message-username">{name}</p>
            <p className="last-message">{message}</p>
            <p className="time">{time.day +"." + time.month + "." + time.year}</p>
            <BiChevronDown size={20} className='message-user-menu' />
        </div>
    </div>
  )
}

export default Message