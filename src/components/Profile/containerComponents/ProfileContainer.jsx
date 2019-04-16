import React from 'react';
import Profile from "../Profile";
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { addPostActionCreator, 
         addNewCommentTextareaCreator } from "../../../BLL/ProfileReducer";


class ProfileContainer extends React.Component {
    
    render() {
        return <Profile {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        newPostMessage: state.profilePage.newPostMessage,
        isLogin: state.login.isLogin
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (post) => {
            dispatch(addPostActionCreator(post))
        },
        sendPostOnChange: (text) => {
            dispatch(addNewCommentTextareaCreator(text))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileContainer))