import React from 'react';
import style from './ContentWall.module.css';
import Post from './Post/Post';


const ContentWall = (props) => {
  
  
  let post = props.posts.map((post) => <Post post={post}/>)
  debugger;
  return (
    <div className={style.cont_wall}>
    
          <div>
            My posts
          </div>
          <div>
            New post
          </div>
        
        <div>
          {post}
        </div>
    </div>
    
 );

}

export default ContentWall;