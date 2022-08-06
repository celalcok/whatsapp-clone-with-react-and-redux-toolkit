import React, { useEffect, useState } from 'react'
import "./userList.css"
import User from './user/User'
import {useDispatch, useSelector} from "react-redux"
import {getAllUsers} from "../../../../redux/user/userSlice"


function UserList() {

  const dispatch = useDispatch();
  const userList = useSelector(state => state.user.list)

 
  useEffect(() => {
    dispatch(getAllUsers());
  },[])
  return (
    <div className="user-list">
      {
        userList.map(user => {
          return <User 
                    key={user.id}
                    userFrom={user.userFrom}
                    profileImg={user.image} 
                    name={user.name} 
                  />
        })
      }
    </div>
  )
}

export default UserList