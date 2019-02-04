import React from 'react';
import style from './Friends.module.css';
import Friend from './Friend/Friend'

const Friends = (props) => {
//   debugger

const friends = props.users.map((friend) => <Friend friend={friend} key={friend.id}/>)
    return (
        <div className={style.friends}>
           {friends}
        </div>)
}

export default Friends;
