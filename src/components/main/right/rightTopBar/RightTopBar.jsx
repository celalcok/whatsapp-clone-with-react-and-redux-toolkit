import React, { useEffect } from 'react'
import "./rightTopBar.css"
import {BsCameraVideo, BsTelephone,BsSearch} from "react-icons/bs"
import {FiChevronDown} from "react-icons/fi"
import {getUser} from "../../../../redux/user/userSlice"
import {useDispatch, useSelector} from "react-redux"

function TopBar() {

  const dispatch = useDispatch();
  const userId = useSelector(state => state.message.userId);
  const user = useSelector(state => state.user.user);
  useEffect(()=>{
    dispatch(getUser(userId))
  },[userId])

  return (
    <div className="right-topbar">
      <img className='profile-img' src={user.image} alt="User Image" />
      <p className="profile-name"> {user.name}</p>
      <BsCameraVideo size={20}/>
      <BsTelephone size={20}/>
      <p className="sep">|</p>
      <BsSearch size={20}/>
      <FiChevronDown size={20}/>
    </div>
  )
}

export default TopBar