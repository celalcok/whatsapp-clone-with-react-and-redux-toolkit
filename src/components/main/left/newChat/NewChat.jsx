import React from 'react'
import {AiOutlineArrowLeft} from "react-icons/ai"
import {useSelector, useDispatch} from "react-redux"
import {hideNewChat} from "../../../../redux/status/statusSlice"
import SearchBox from '../top/searchBox/SearchBox'
import UserList from '../userList/UserList'
import "./newChat.css"
import {searchUsers} from "../../../../redux/user/userSlice"


function NewChat() {

    const searchMethod = (e)=>{
        dispatch(searchUsers(e.target.value))
      }
    const dispatch = useDispatch()  
    const showNewChat = useSelector(state=>state.status.showNewChat);
    console.log(showNewChat)
  return (
    <div className={`new-chat ${showNewChat?"show":"hide"}`}>
        <div className='profile-title-container'>
            <h2 className='profile-title'><AiOutlineArrowLeft className='profile-title-icon' onClick={()=>{
              dispatch(hideNewChat());
            }}  /> <span>New Chat</span> </h2>
        </div>
        <SearchBox  method={searchMethod} />
        <UserList/>
    </div>
  )
}

export default NewChat