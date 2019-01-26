import React from 'react';
import m from './Dialogs.module.css'
import Dialog from './dialog/Dialog'
import Message from './message/message'

const Dialogs = (props) => {
   
    const dialogs = props.dialogs.map((dialog) => <Dialog dialog={dialog}/>);
    const messages = props.messages.map((message) => <Message message={message}/>);
    return (
        <div className={m.mes}>
            
            <div className={m.user}>
                {dialogs} 
            </div>
            <div className={m.message}>
                {messages}
            </div>

        </div>
    )

}

export default Dialogs;