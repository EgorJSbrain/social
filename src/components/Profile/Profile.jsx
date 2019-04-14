import React from 'react';
import style from './Profile.module.css';
import AvatarDiscriptionContainer from './containerComponents/AvatarDescriptionContainer';
import ProfileWallContainer from './containerComponents/ProfileWallContainer';
// import UserPhotosContainer from './containerComponents/UserPhotosContainer';
import {Redirect} from 'react-router-dom'



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