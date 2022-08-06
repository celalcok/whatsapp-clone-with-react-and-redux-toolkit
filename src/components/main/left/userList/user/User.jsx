import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { hideNewChat } from '../../../../../redux/status/statusSlice';
import "./user.css"


function User({profileImg,name}) {
  const dispatch = useDispatch();
  const showNewChat = useSelector(state => state.status.showNewChat);
  useEffect(()=>{

  });
  return (
    <div className="user" onClick={()=>dispatch(hideNewChat())} >
        <img src={profileImg?profileImg:"http://alz.org.tr/wp-content/uploads/2021/06/nopic.png"} alt="" className="user-profile-img" />
        <div className="user-info">
            <p className="username">{name}</p>
        </div>
    </div>
  )
}

export default User