import React, { useEffect, useState } from 'react'
import "./actionBar.css"
import {BsFillBrightnessLowFill,BsChevronDown} from "react-icons/bs"
import {FiEdit} from "react-icons/fi"
import {showStatus, showProfile, showNewChat} from "../../../../../redux/status/statusSlice"
import {useDispatch, useSelector} from "react-redux"


function ActionBar() {

  const dispatch = useDispatch()
  const auth = useSelector(state=>state.auth)

  return (
    <div className="action-bar">
            <img src={auth.image} id='personProfile' alt="Profile"  onClick={()=>{
              dispatch(showProfile());
            }} />
            <BsFillBrightnessLowFill id='personStatus' size={30} onClick={()=>{
              dispatch(showStatus());
            }}  />
            <FiEdit size={20} id="newChat" onClick={()=>{
              dispatch(showNewChat());
            }} />
            <BsChevronDown size={20}/>
    </div>
  )
}

export default ActionBar