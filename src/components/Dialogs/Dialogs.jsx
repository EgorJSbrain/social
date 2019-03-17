import React from 'react';
import styles from './Dialogs.module.css'
import Dialog from './dialog/Dialog'
import Message from './message/message'
import PropTypes from 'prop-types';


const Dialogs = (props) => {
    let newMessageText = props.dialogsPage.newMessageText;
    let {sendTextOnChange} = props;
   

    // console.log(newMessageElement)
    const dialogs = props.users.users.map((dialog) => <Dialog dialog={dialog} key={dialog.id}/>);
    const messages = props.dialogsPage.messages.map((message) => <Message message={message} key={message.id}/>);
    
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
                                <input className={styles.input}
                                       type='text'
                                       value={newMessageText}
                                       onChange={e => sendTextOnChange(e.target.value)}/>
                            </div>
                                
                            <div>
                                <button className={styles.button}
                                        onClick={() => props.addMessage(newMessageText) }>Add message</button>
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