import React, { useEffect } from 'react'
import "./statusLeft.css"
import {useSelector, useDispatch} from "react-redux"
import {getUserHavingStatus} from "../../../redux/user/userSlice"
import UserStatus from './userStatus/UserStatus'

function StatusLeft() {

    const dispatch = useDispatch();
    const usersHavingStatus = useSelector(state => state.user.statusList)
    const auth = useSelector(state => state.auth);
    useEffect(()=>{
        dispatch(getUserHavingStatus())
    },[])
  return (
    <div className="status-left" >
        <header>
            <img src={auth.image} className='status-profile-img' alt=''/>
            <p className='status-title'>My Status</p>
            <p className='status-text'>No Updates</p>
        </header>
        <aside>
            <p className='status-text' >Seen</p>
            <ul className='status-list' >
                {
                    usersHavingStatus
                    .map(user =>{
                        // return <li> {user.name} </li>
                    return (<UserStatus key={user.id} user={user} />)
                    })
                }
            </ul>
        </aside>
        <footer>

        </footer>
    </div>
  )
}

export default StatusLeft