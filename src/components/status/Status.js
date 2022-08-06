import React,{useEffect} from 'react'
import {showStatus, hideStatus} from "../../redux/status/statusSlice"
import {useDispatch, useSelector} from "react-redux"
import "./status.css"
import StatusLeft from './left/StatusLeft';
import StatusRight from './right/StatusRight';

function Status() {

    const dispatch = useDispatch();
    const showStatus = useSelector(state => state.status.showStatus)
useEffect(() => {
    
}, [showStatus])
   
  return (
    <div  className={`status ${showStatus?"show":"hide"}`}>
        <StatusLeft/>
       
        <StatusRight/>
        <button onClick={()=>{dispatch(hideStatus())}} className='btn-close'>
            X
        </button>
    </div>
  )
}

export default Status