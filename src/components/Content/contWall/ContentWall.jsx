import React from 'react';
import style from './ContentWall.module.css';
import Post from './Post/Post';
import PropTypes from 'prop-types';

const ContentWall = (props) => {
  
  
  let posts = props.posts.map((post) => <Post post={post.post} key={post.id}/>);

  let newPostElement = React.createRef();

  // let addPost = () => {
  //   let text = newPostElement.current.value;
  //  props.addPost(text);
  //  newPostElement.current.value = "";
  // };

   debugger;
  return (
    <div className={style.cont_wall}>    
          <div>
            <h2>My posts</h2>
          </div>
          
          {/* <div>
            New post
              <div>
                <textarea ref={newPostElement}></textarea>
              </div>
              <div>
                <button onClick={ addPost }>Add post</button>
              </div>
          </div> */}
        
        <div>
          {posts}
        </div>
    </div>
    
 );

};

ContentWall.propTypes = {
  posts: PropTypes.array.isRequired
}

export default ContentWall;