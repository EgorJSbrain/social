import React from 'react';
import style from './Friend.module.css';
import {NavLink} from 'react-router-dom'

const Friend = (props) => {
    let {user} = props;
    //   debugger
    let unsubscribe = (user) => {
        props.unsubscribe(user.id)
    }
    let subscribe = (e) => {  
        let clickedButton = e.target
        props.subscribe(+clickedButton.dataset.userId)
    }

    if (!user) {
        return <div>User not found</div>
    }

    return (
            <div className={style.friend} >
                <NavLink to={`/user/${user.id}`}>
                    <div>
                        <img src={user.photos.small == null ? "https://via.placeholder.com/100" : user.photos.small} 
                             alt="" 
                             className={style.avatar__small}/>
                    </div>
                </NavLink>
                <NavLink to={'dialogs/' + user.id}>
                    send message
                </NavLink>
                <div className={style.status}>
                    {user.status ? user.status : 'no status' }
                </div>
                
                <div className={style.name}>
                    {user.name}
                </div>
                <div>
                    {user.id}
                </div>
                <div>
                    {user.followed ? <button onClick={() => unsubscribe(user)}>Unsubscribe</button> : <button data-user-id={user.id} onClick={subscribe}>Subscribe</button>}
                </div>
            </div>
    )
}

export default Friend;