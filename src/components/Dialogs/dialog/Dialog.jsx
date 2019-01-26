import React from 'react';
import s from './Dialog.module.css'


const Dialog = (props) => {
    
    return (
        <div className={s.block}>
            <div className={s.img}>
               <img src={props.dialog.photo} className={s.img}></img>
            </div>
            <div>
               Имя: {props.dialog.name}
            </div>
            

        </div>
    )

}

export default Dialog;