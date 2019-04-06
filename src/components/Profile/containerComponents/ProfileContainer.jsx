import React from 'react';
import Profile from "../Profile";
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { addPostActionCreator, 
         addNewCommentTextareaCreator } from "../../../BLL/ProfileReducer";
// import { usersSelector } from '../../../BLL/FriendsReducer';

class ProfileContainer extends React.Component {
    
    // componentDidMount() {
    //     // debugger
    //     let userId;
    //     let match = this.props.match;
    //         if(match.path === "user/:id") {
    //             return <div>1111</div>
    //         }

   // }
    render() {
        //console.log(this.props)
        return <Profile {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    
    // debugger
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