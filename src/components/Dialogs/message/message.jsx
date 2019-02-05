import React from 'react';
import message from './message.module.css'


const Message = (props) => {
    return (
        <div className={message.mes}> 
            <div>   
                <div className={message.message}>{ props.message.message }</div>  
            </div>
        </div>
    )

}

export default Message;