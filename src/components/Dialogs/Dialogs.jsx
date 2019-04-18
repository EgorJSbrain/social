import React from 'react';
import styles from './Dialogs.module.css'
import Dialog from './dialog/Dialog'
import Message from './message/message'
import PropTypes from 'prop-types';
import axios from './../../DAL/axios-instatnce'
import _ from 'lodash'


//const Dialogs = (props) => {
    // let newMessageText = props.dialogsPage.newMessageText;
    // let {sendTextOnChange} = props;
    // let users = []
    // console.log(newMessageElement)
    // const dialogs = props.users.users.map((dialog) => <Dialog dialog={[]} key={dialog.id}/>);
    
    
    class Dialogs extends React.Component {
        constructor(props) {
            super(props);
            
            this.sendMessage = this.sendMessage.bind(this)
            this.newMessageRef = React.createRef()
            //  debugger
           
        }
        async sendMessage() {
            debugger
            await axios.post(`dialogs/${this.props.currentDialogId}/messages`, 
            {
                body: this.newMessageRef.current.value
            })
             this.getMessages(this.props.currentDialogId)
        }
        getMessages(userId) {
            return axios.get(`dialogs/${userId}/messages`)
                .then( response => {
                    this.props.setMessages(response.data.items)
                })
        }
         selectedDialog(id) {
             this.props.setCurrentDialogId(id);
            // return await this.getMessages();
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
            }else {
                this.getMessages(userId)
            } 
        }
        startGetNewMessagesInterval() {
            setInterval( () => {
                this.getMessages(this.props.currentDialogId)
            }, 5000)
        }
        async componentDidMount () {
            let userId = this.props.match.params.userId
            // console.log(userId)
            if (userId) {
                await axios.put(`/dialogs/${userId}`)
                let response = await axios.get('dialogs')
                this.props.setDialogs(response.data);
                await this.selectedDialog(userId);
                this.startGetNewMessagesInterval(); //don't work

            } else {
                axios.get('dialogs')
                    .then((response) => {
                        // console.log(response)
                        this.props.setDialogs(response.data)
                })    
            }           
        }
        
        render() {
            return (<>
        
                <div className={styles.mes}>
                    <div className={styles.dialogs_block}>
                        {
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
                                            //    value={this.props.newMessageText}
                                               ref = {this.newMessageRef}/>
                                               {/* onChange={e => this.sendTextOnChange(e.target.value)} */}
                                        <button className={styles.button}
                                                onClick={ () => this.sendMessage(this.newMessageRef) }>Add message</button>
                                                {/* onClick={() => this.sendMessage(this.props.newMessageText) }>Add message</button> */}
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