import React from 'react';
import styles from './Dialogs.module.css'
import Dialog from './dialog/Dialog'
import Message from './message/message'
import PropTypes from 'prop-types';

const Dialogs = (props) => {
//    debugger
    let {addMessage} = props;
    let newMessageElement = React.createRef();
    let onAddMessage = () => {
        let message = newMessageElement.current.value;
        addMessage(message);
        newMessageElement.current.value = "";
        // alert(text);
      }
    //   debugger
    // console.log(newMessageElement)
    const dialogs = props.users.map((dialog) => <Dialog dialog={dialog} key={dialog.id}/>);
    const messages = props.messages.map((message) => <Message message={message} key={message.id}/>);
    return (
        <div className={styles.mes}>
            
            <div className={styles.user}>
                {dialogs} 
            </div>
            <div className={styles.messages}>
                {messages}
                <div className={styles.block_button}>
                    <div>
                        <textarea ref={ newMessageElement } className={styles.textarea}></textarea>
                    </div>
                        
                    <div>
                        <button onClick={ onAddMessage } className={styles.button}>Add message</button>
                    </div>
                </div>
            </div>
               
        </div>
    )

}

Dialogs.propTypes = {
    messages: PropTypes.array,
    users: PropTypes.array
};

export default Dialogs;