import React from 'react';
import style from './Friend.module.css'

const Friend = (props) => {
    let {user} = props;

    if (!user) {
        return <div>User not found</div>
    }

    return (
        <div className={style.friend}>
            <img src={user.photos.small == null ? "https://via.placeholder.com/100" : user.photos.small} 
                 alt="" 
                 className={style.avatar__small}/>

            <div className={style.status}>
                {user.status ? user.status : 'no status' }
            </div>
            
            <div className={style.name}>
                {user.name}
            </div>
            <div>
                {user.id}
            </div>
        </div>
    )
}

export default Friend;