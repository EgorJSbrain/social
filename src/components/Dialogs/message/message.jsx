import React from 'react';
import message from './message.module.css'


const Message = (props) => {
    // debugger
    return (
        <div className={message.mes}> 
        
            <div>
                <div><b>{props.message.senderName}</b></div>
                <div className={message.message}>
                    { props.message.body }
                </div>  
            </div>
        </div>
    )

}

export default Message;