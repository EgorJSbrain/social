import React from 'react';
import style from './Friends.module.css';
import Friend from './Friend/Friend';

const Friends = (props) => {
//  debugger
    return (
        <div className={style.wrapper}>
            {
                props.users.map( (user) => <Friend user={user} key={user.id} {...props}/> )
            }
        </div>         
    )
}


export default Friends;
