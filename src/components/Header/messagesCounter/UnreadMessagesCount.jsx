import React from 'react'
import style from './UnreadMessagesCounter.module.css'
import { connect } from 'react-redux';
import { setNewMessagesCount } from '../../../BLL/DialogsReducer';
import axios from './../../../DAL/axios-instatnce'



class UnreadMessagesCount extends React.Component {
    componentDidMount() {
        this.pingIntervalId = setInterval( () => {
            axios.get(`dialogs/messages/new/count`)
            .then( (response) => {
                this.props.setNewMessagesCount(response.data)
                console.log(response.data)
            });
        }, 1000000)
    }
    componentWillUnmount() {
        clearInterval(this.pingIntervalId)
    }
    render() {
        return (
            this.props.newMessagesCount > 0 ?
                <div className={style.new_messages_count}>
                    {
                        this.props.newMessagesCount
                    }
                </div> 
            : null
        )
    }
}
let mapStateToProps = (state) => {
    return {
        newMessagesCount: state.dialogsPage.newMessagesCount
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setNewMessagesCount: (count) => {
            dispatch(setNewMessagesCount(count))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UnreadMessagesCount);