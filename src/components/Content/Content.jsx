import React from 'react';
import ContentWall from './contWall/ContentWall';
import UserPhotos from './photos/photo';
import style from './Content.module.css';
import AvatarDiscription from './avatar-discription/AvatarDiscription';
// import PropTypes from 'prop-types';


const Content = ( props ) => {
let photo = props.data.photo;
let posts = props.posts;
    debugger;
  return (
      <div className={style.wrapper}>
        <div className={style.cont}>
          {/* My content */}
            {/* <div>
              <img src="https://images.pexels.com/photos/1146708/pexels-photo-1146708.jpeg?cs=srgb&dl=4k-wallpaper-agriculture-android-wallpaper-1146708.jpg&fm=jpg"></img>
            </div> */}
          
          <AvatarDiscription photo={photo} data={props.data}/>
            <ContentWall posts={posts} store={props.store}/>
            <UserPhotos />
          
        </div>
      </div>
 );

};



export default Content;