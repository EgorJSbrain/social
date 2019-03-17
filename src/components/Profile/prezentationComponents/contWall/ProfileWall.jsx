import React from 'react';
import style from './ProfileWall.module.css';
import Post from './Post/Post';
import PropTypes from 'prop-types';


const ProfileWall = (props) => {
  let {sendPostOnChange} = props;
  
  let posts = props.profileWall.posts.map((post) => <Post post={post} key={post.id}/>);
  let newPostMessage = props.newPostMessage;
  

  return (
    <div className={style.cont_wall}>    
          <div>
            <h2>My posts</h2>
          </div>
          
          <div>
              <div>
                <input className={style.input}
                       type="text" 
                       onChange={e => sendPostOnChange(e.target.value)} 
                       value={newPostMessage}/>
              </div>
              <div>
                <button className={style.button} 
                        onClick={() => props.addPost(newPostMessage)}>Add post</button>
              </div>
          </div>
        
        <div>
          {posts}
        </div>
    </div>
    
 );

};

ProfileWall.propTypes = {
  posts: PropTypes.array.isRequired
}



export default ProfileWall;