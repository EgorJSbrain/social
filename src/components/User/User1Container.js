import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { getUsers, changeToggle, addAvatarUser } from '../../BLL/ProfileReducer';
import PageOfUser from './PageOfUser';


class AvatarDiscriptionContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersTC(this.props.match.params.userId)
    }
    render() {
        return <PageOfUser {...this.props}/>
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
AvatarDiscriptionContainer = withRouter(connect (mapStateToProps, mapDispatchToProps)(AvatarDiscriptionContainer)); 

export default AvatarDiscriptionContainer;
