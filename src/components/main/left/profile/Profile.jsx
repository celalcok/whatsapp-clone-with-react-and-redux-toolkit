import React from 'react'
import {AiOutlineArrowLeft} from "react-icons/ai"
import {AiOutlineCamera} from "react-icons/ai"
import {BsPencil} from "react-icons/bs"
import {useSelector, useDispatch} from "react-redux"
import {hideProfile} from "../../../../redux/status/statusSlice"
import "./profile.css"


function Profile() {

    const auth = useSelector(state=>state.auth)
    const dispatch = useDispatch()  
    const showProfile = useSelector(state=>state.status.showProfile);
    console.log(showProfile)
  return (
    <div className={`profile ${showProfile?"show":"hide"}`}>
        <div className='profile-title-container'>
            <h2 className='profile-title'><AiOutlineArrowLeft className='profile-title-icon' onClick={()=>{
              dispatch(hideProfile());
            }}  /> <span>Profile</span> </h2>
        </div>
            <div className="profile-image-container">
                <div className='profile-image'  >
                    <img src={auth.image}/>          
                    <div className="profile-image-overlay">
                        <AiOutlineCamera/>
                        <h3>CHANGE PROFILE IMAGE</h3>
                    </div>
                </div>
      
            </div>
           <div className="profile-left-name">
               <p className="profile-left-name-title">Your Name</p>
               <div className='profile-left-name-content'>
                <p>{auth.authName}</p>
                <BsPencil/>
               </div>
           </div>
           <div className="profile-description">
               <p>This is not your username or key. This name may be seen by your Whatsapp persons</p>
           </div>
           <div className="profile-about">
               <p className="profile-about-title">About Me</p>
               <div className='profile-about-content'>
                <p>Awailable</p>
                <BsPencil/>
               </div>
           </div>
    </div>
  )
}

export default Profile