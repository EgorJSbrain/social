import React from 'react';
import ContentWall from './contWall/ContentWall';
import UserPhotos from './photos/photo';
import style from './Content.module.css';
import AvatarDiscription from './avatar-discription/AvatarDiscription';


const Content = ( data ) => {
  return (
    <div className={style.cont}>
      {/* My content */}
        {/* <div>
          <img src="https://images.pexels.com/photos/1146708/pexels-photo-1146708.jpeg?cs=srgb&dl=4k-wallpaper-agriculture-android-wallpaper-1146708.jpg&fm=jpg"></img>
        </div> */}
       
        <AvatarDiscription photo={data.photo} data={data}/>
        <ContentWall posts={posts}/>
        <UserPhotos />
      
    </div>
    
 );

}

export default Content;