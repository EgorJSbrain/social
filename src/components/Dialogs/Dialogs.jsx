import React from 'react';
import styles from './Dialogs.module.css'
import Dialog from './dialog/Dialog'
import Message from './message/message'
import PropTypes from 'prop-types';
import { addMessageActionCreator } from '../../redux/messageReducer';

const Dialogs = (props) => {
//    debugger
    let store= props.store;
    let newMessageElement = React.createRef();
    
    
    
    let onAddMessage = () => {
        let message = newMessageElement.current.value;
        store.dispatch( addMessageActionCreator(message)); 
        newMessageElement.current.value = "";
      }

    // console.log(newMessageElement)
    const dialogs = props.users.map((dialog) => <Dialog dialog={dialog} key={dialog.id}/>);
    const messages = props.messages.map((message) => <Message message={message} key={message.id}/>);
    return (
        <div className={styles.mes}>
            
            <div className={styles.user}>
                {dialogs} 
            </div>
                <div className={styles.messages}>
                    <div className={styles.block_message} ref={(scroller)=>{window.scroller = scroller}}>
                    {(() => {setTimeout(()=>{window.scroller.scrollTop = window.scroller.scrollHeight;},0); return ''})()}
                        {messages}
                    </div>
                        <div className={styles.block_button}>
                            <div>
                                <input ref={ newMessageElement } className={styles.input}/>
                            </div>
                                
                            <div>
                                <button onClick={ e => onAddMessage() } className={styles.button}>Add message</button>
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