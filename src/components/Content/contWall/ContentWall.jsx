import React from 'react';
import style from './ContentWall.module.css';
import Post from './Post/Post';
import PropTypes from 'prop-types';
import { addPostActionCreator } from '../../../redux/postReducer';

const ContentWall = (props) => {
  let store = props.store;
  
  let posts = props.posts.map((post) => <Post post={post} key={post.id}/>);

  let newPostElement = React.createRef();

 
  let onAddPostClick = () => { 
      let post = newPostElement.current.value;
      store.dispatch(addPostActionCreator(post)); 
      newPostElement.current.value = "";
  }
  //  debugger;
  return (
    <div className={style.cont_wall}>    
          <div>
            <h2>My posts</h2>
          </div>
          
          <div>
              <div>
                <input type="text" ref={ newPostElement } className={style.input}/>
              </div>
              <div>
                <button className={style.button} onClick={ e => onAddPostClick() }>Add post</button>
              </div>
          </div>
        
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