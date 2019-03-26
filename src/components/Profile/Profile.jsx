import React from 'react';
import style from './Profile.module.css';
import AvatarDiscriptionContainer from './containerComponents/AvatarDescriptionContainer';
import ProfileWallContainer from './containerComponents/ProfileWallContainer';
import UserPhotosContainer from './containerComponents/UserPhotosContainer';
import {Redirect} from 'react-router-dom'



const Profile = ( props ) => {
  
  if (props.isLogin == false) {
    return <Redirect to='/'/>
  }

  return (
      <div className={style.wrapper}>
        <div className={style.cont}>
          {/* My content */}
            {/* <div>
              <img src="https://images.pexels.com/photos/1146708/pexels-photo-1146708.jpeg?cs=srgb&dl=4k-wallpaper-agriculture-android-wallpaper-1146708.jpg&fm=jpg"></img>
            </div> */}
          
            <AvatarDiscriptionContainer />
            <ProfileWallContainer />
            <UserPhotosContainer />
          
        </div>
      </div>
 );

};



export default Profile;