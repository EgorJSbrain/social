import React from 'react';
import style from './Friends.module.css';
import Friend from './Friend/Friend'

const Friends = (props) => {
//   debugger
    return (
        <div className={style}>
           <Friend users={props.users}/>
        </div>)
}

export default Friends;