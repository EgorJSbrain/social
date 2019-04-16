import React from 'react';
import style from './Profile.module.css';
import ProfileWallContainer from './containerComponents/ProfileWallContainer';
import {Redirect} from 'react-router-dom'
import AvatarDiscriptionContainer from '../User/User1Container';



const Profile = ( props ) => {
  // debugger
  if (props.isLogin === false) {
    return <Redirect to='/'/>
  }

  return (
      <div className={style.wrapper}>
        <div className={style.cont}>        
            <AvatarDiscriptionContainer />
            <ProfileWallContainer />
            {/* <UserPhotosContainer /> */}
          
        </div>
      </div>
 );

};



export default Profile;