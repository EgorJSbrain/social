import React from 'react';
import style from './ProfileWall.module.css';
import Post from './Post/Post';
import PropTypes from 'prop-types';


const ProfileWall = (props) => {
  let newPostMessage = props.newPostMessage;
  

  return (
    <div className={style.cont_wall}>    
          <div>
            <h2>My posts</h2>
          </div>
          
          <div>
              <div>
                <input className={style.input_post}
                       type="text" 
                       onChange={e => props.sendPostOnChange(e.target.value)} 
                       value={newPostMessage}/>
              </div>
              <div>
                <button className={style.button} 
                        onClick={() => props.addPost(props.newPostMessage)}>Add post</button>
              </div>
          </div>
        
        <div>
          {
            props.profileWall.posts.map((post) => <Post post={post} key={post.id}/>)
          }
        </div>
    </div>
    
 );

};

ProfileWall.propTypes = {
  posts: PropTypes.array.isRequired
}



export default ProfileWall;