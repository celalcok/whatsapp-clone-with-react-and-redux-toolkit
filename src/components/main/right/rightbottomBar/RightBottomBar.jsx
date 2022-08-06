"use strict"

import React,{useState} from 'react'
import "./rightBottomBar.css"
import {BsEmojiSmile, BsMic} from "react-icons/bs"
import {GrAttachment} from "react-icons/gr"
import {IoPaperPlaneOutline} from "react-icons/io5"
import{addMessage,} from "../../../../redux/message/messageSlice"
import {useDispatch, useSelector} from "react-redux"

function RightBottomBar() {

  const [isWrite, setIsWrite] = useState(false)
  const [content,setContent] = useState("")
  const dispatch = useDispatch()
  const messageList = useSelector(state => state.message.list)

  console.log(messageList)

  const handleChange = (e) => {
    if(e.target.value ==="" || e.target.value === undefined){
      setIsWrite(false);
    }else{
      setIsWrite(true);
      setContent(e.target.value);
      console.log(content);
    }
  }
  const arr = []
  const handleSubmit = () => {
    const newMessage = {
      id:7,
      userFrom:1,
      userTo:2,
      content:content,
      date:{
        day:1,
        month:8,
        year:2022
      }
    }
    arr.push(newMessage);
    // dispatch(addMessage(newMessage))

    console.log(arr)
  }

  return (
    <div className="right-bottombar">
      <BsEmojiSmile size={25}/>
      <GrAttachment size={20}/>
      <input onChange={(e)=>handleChange(e)} type="text" className="input-write-message" placeholder='Write a message' />
      {
        isWrite ? <IoPaperPlaneOutline onClick={()=>handleSubmit()} className='plane' size={25}/>:<BsMic size={25}/>
      }
    </div>
  )
}

export default RightBottomBar