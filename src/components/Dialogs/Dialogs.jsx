import React from 'react';
import styles from './Dialogs.module.css'
import Dialog from './dialog/Dialog'
import Message from './message/message'
import PropTypes from 'prop-types';
import axios from './../../DAL/axios-instatnce'
import _ from 'lodash'


    class Dialogs extends React.Component {
        constructor(props) {
            super(props);
            this.sendMessage = this.sendMessage.bind(this)
            this.newMessageRef = React.createRef()
            this.intervalMessage = null;
            //  debugger
           
        }

        sendMessage() {
            this.props.sendMessage(this.newMessageRef.current.value)
            this.newMessageRef.current.value =''
        }
        getMessages(userId) {
            this.props.getMessages(userId)
        }

        selectedDialog(id) {
             this.props.setCurrentDialogId(id);
             this.startGetNewMessagesInterval();
        }
        componentWillReceiveProps(nextProps) {
            if (nextProps.currentDialogId !== this.props.currentDialogId) {
                this.getMessages(nextProps.currentDialogId)
            }
        }
        getMessagesNewerThenLast(userId) {
            let lastMessages = _.last(this.props.messages);
            if (!!lastMessages) {
                axios.get(`dialogs/${userId}/messages/new?newerThen=${lastMessages.addedAt}`)
                .then(response => {
                    this.props.appendMessages(response.data.items)
                }) 
            } else {
                this.getMessages(userId)
            } 
        }
        startGetNewMessagesInterval() {
            this.intervalMessage = setInterval( () => {
                this.getMessages(this.props.currentDialogId)
            }, 5000)
        }
        componentDidMount () {
            let userId = this.props.match.params.userId
            if (userId) {
                this.props.setMessagesOfDialogs(userId)
            } else {
                 this.props.getDialogs() 
            }           
        }
        componentWillUnmount() {
            clearInterval(this.intervalMessage)
        }
        render() {
            
            return (<>
        
                <div className={styles.mes}>
                    <div className={styles.dialogs_block}>
                        {this.props.dialogs &&
                            this.props.dialogs.map((dialog) => <div onClick={() => this.selectedDialog(dialog.id)} key={dialog.id}>
                                <Dialog dialog={dialog} />
                            </div>)
                        }
                    </div>
                            <div className={styles.messages_block}>
                                <div className={styles.block_message} ref={(scroller)=>{window.scroller = scroller}}>
                                    {/* {(() => {setTimeout(()=>{window.scroller.scrollTop = window.scroller.scrollHeight;},0); return ''})()} */}
                                    {
                                        this.props.messages.map((message) => <Message message={message} key={message.id}/>)
                                    }  
                                </div>
                                <div className={styles.block_button}>
                                    <div>
                                        <input className={styles.input_dialogs}
                                               type='text'
                                               ref = {this.newMessageRef}/>
                                               
                                        <button className={styles.button}
                                                onClick={ () => this.sendMessage() }>Add message</button>
                                    </div>
                                </div>
                               
                            </div>
                       
                </div>
            </>)
        }
    }
    


    



Dialogs.propTypes = {
    messages: PropTypes.array,
    users: PropTypes.array
};

export default Dialogs;
















// class Dialogs extends React.Component {
//     constructor(props) {
//         super(props);
//         this.sendMessage = this.sendMessage.bind(this)
//         this.newMessageRef = React.createRef()
//         //  debugger
       
//     }
//     async sendMessage() {
//         debugger
//         await axios.post(`dialogs/${this.props.currentDialogId}/messages?count=100`, 
//         {
//             body: this.newMessageRef.current.value
//         })
//         this.newMessageRef.current.value = ''
//          this.getMessages(this.props.currentDialogId)
//     }
//     getMessages(userId) {
//         return axios.get(`dialogs/${userId}/messages`)
//             .then( response => {
//                 this.props.setMessages(response.data.items)
//             })
//     }
//      selectedDialog(id) {
//          this.props.setCurrentDialogId(id);
//         // return await this.getMessages();
//     }
//     componentWillReceiveProps(nextProps) {
//         if (nextProps.currentDialogId !== this.props.currentDialogId) {
//             this.getMessages(nextProps.currentDialogId)
//         }
//     }
//     getMessagesNewerThenLast(userId) {
//         let lastMessages = _.last(this.props.messages);
//         if (!!lastMessages) {
//             axios.get(`dialogs/${userId}/messages/new?newerThen=${lastMessages.addedAt}`)
//             .then(response => {
//                 this.props.appendMessages(response.data.items)
//             }) 
//         }else {
//             this.getMessages(userId)
//         } 
//     }
//     startGetNewMessagesInterval() {
//         setInterval( () => {
//             this.getMessages(this.props.currentDialogId)
//         }, 5000)
//     }
//     async componentDidMount () {
//         let userId = this.props.match.params.userId
//         // console.log(userId)
//         if (userId) {
//             await axios.put(`/dialogs/${userId}`)
//             let response = await axios.get('dialogs')
//             this.props.setDialogs(response.data);
//             await this.selectedDialog(userId);
//             this.startGetNewMessagesInterval(); //don't work

//         } else {
//             axios.get('dialogs')
//                 .then((response) => {
//                     // console.log(response)
//                     this.props.setDialogs(response.data)
//             })    
//         }           
//     }
    
//     render() {
//         return (<>
    
//             <div className={styles.mes}>
//                 <div className={styles.dialogs_block}>
//                     {
//                         this.props.dialogs.map((dialog) => <div onClick={() => this.selectedDialog(dialog.id)} key={dialog.id}>
//                             <Dialog dialog={dialog} />
//                         </div>)
//                     }
//                 </div>
//                         <div className={styles.messages_block}>
//                             <div className={styles.block_message} ref={(scroller)=>{window.scroller = scroller}}>
//                                 {/* {(() => {setTimeout(()=>{window.scroller.scrollTop = window.scroller.scrollHeight;},0); return ''})()} */}
//                                 {
//                                     this.props.messages.map((message) => <Message message={message} key={message.id}/>)
//                                 }  
//                             </div>
//                             <div className={styles.block_button}>
//                                 <div>
//                                     <input className={styles.input_dialogs}
//                                            type='text'
//                                            ref = {this.newMessageRef}/>
                                           
//                                     <button className={styles.button}
//                                             onClick={ () => this.sendMessage(this.newMessageRef) }>Add message</button>
                                            
//                                                                                 </div>
//                             </div>
                           
//                         </div>
                   
//             </div>
//         </>)
//     }
// }







// Dialogs.propTypes = {
// messages: PropTypes.array,
// users: PropTypes.array
// };

// export default Dialogs;