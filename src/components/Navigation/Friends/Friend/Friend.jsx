import React from 'react';
import style from './Friend.module.css';


const Friend = (props) => {
    
  debugger;
  let friends = props.users.map((friend) => {
    return (
      <div key={friend.id}>
        <div>{props.friend.photo}</div>
        <div>{props.friend.name}</div>
      </div>
    )
   
  })

  return (
      <div className={style}>
        {friends}
      </div>
  )
        
}

export default Friend;