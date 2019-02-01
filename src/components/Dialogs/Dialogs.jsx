import React from 'react';
import m from './Dialogs.module.css'
import Dialog from './dialog/Dialog'
import Message from './message/message'
import PropTypes from 'prop-types';

const Dialogs = (props) => {
//    debugger
    const dialogs = props.users.map((dialog) => <Dialog dialog={dialog} key={dialog.id}/>);
    const messages = props.messages.map((message) => <Message message={message} key={message.id}/>);
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

Dialogs.propTypes = {
    messages: PropTypes.array,
    users: PropTypes.array
};

export default Dialogs;