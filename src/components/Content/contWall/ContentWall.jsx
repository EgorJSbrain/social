import React from 'react';
import style from './ContentWall.module.css';
import Post from './Post/Post';
import PropTypes from 'prop-types';

const ContentWall = (props) => {
  
  
  let post = props.posts.map((post) => <Post post={post} key={post.id}/>)
  // debugger;
  return (
    <div className={style.cont_wall}>
    
          <div>
            <h2>My posts</h2>
          </div>
          
          <div>
            New post
              <div>
                <textarea></textarea>
              </div>
          </div>
        
        <div>
          {post}
        </div>
    </div>
    
 );

};

ContentWall.propTypes = {
  posts: PropTypes.array.isRequired
}

export default ContentWall;