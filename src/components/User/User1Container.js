import React from 'react';
import { connect } from 'react-redux';
import User1 from './User1';
import {withRouter} from 'react-router-dom';
import { getUsers, changeToggle, addAvatarUser } from '../../BLL/ProfileReducer';


class UserContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersTC(this.props.match.params.userId)
    }
    render() {
        return <User1 {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        id: state.auth.userInfo.userId,
        toggle: state.profilePage.toggleFlag
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
        getUsersTC: (userId) => {
            dispatch(getUsers(userId))
        },
        changeToggle: () => {
            dispatch(changeToggle())
        }, 
        addAvatar: (avatar) => {
            dispatch(addAvatarUser(avatar))
        }

    }
  }
// debugger
 UserContainer = withRouter(connect (mapStateToProps, mapDispatchToProps)(UserContainer)); 

export default UserContainer;
