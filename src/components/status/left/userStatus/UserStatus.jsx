import React from 'react'
import "./userStatus.css"
import {useDispatch, useSelector} from "react-redux"



function UserStatus({user}) {


  return (
    <div className="user-status" >
        <img src={user.image?user.image:"http://alz.org.tr/wp-content/uploads/2021/06/nopic.png"} alt="" className="status-user-profile-img" />
        <div className="status-user-info">
            <p className="username">{user.name}</p>
            <p className="time">Today</p>
        </div>
    </div>
  )
}

export default UserStatus