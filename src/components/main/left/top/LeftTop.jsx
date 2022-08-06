import React from 'react'
import ActionBar from './actionBar/ActionBar'
import "./leftTop.css"
import SearchBox from './searchBox/SearchBox'
import {searchMessages} from "../../../../redux/message/messageSlice"
import {useDispatch} from "react-redux"

function Top() {
  const dispatch = useDispatch()

  const searchMethod = (e)=>{
    dispatch(searchMessages(e.target.value))
  }
  return (
    <div className='left-top'>
      <ActionBar/>
      <SearchBox method={searchMethod} />
    </div>
  )
}

export default Top