import React from 'react';
import style from './Post.module.css';


const Post = (props) => {

//   debugger
  return (
         <div className={style.post}>
            <div>
               <img src={props.post.photo} alt="" className={style.photo}></img>
            </div>
            <div>
               <div className={style.text}>{props.post.text}</div>
            </div>
         </div>
    
 );

}

export default Post;