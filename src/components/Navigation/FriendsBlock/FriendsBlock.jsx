import React from 'react';
import style from './FriendsBlock.module.css';
import FriendBlock from './FriendBlock/FriendBlock'

const FriendsBlock = (props) => {
//   debugger

//const friends = props.users.map((friend) => <FriendBlock friend={friend} key={friend.id}/>)
    return (
        <div className={style.friends}>
           {/* {friends} */}
        </div>
        )
}

export default FriendsBlock;
