import React from 'react';
import {connect} from 'react-redux';
import { setUsers, setStatus, getFriends, usersSelector, subscribeToUser, unSubscribeToUser } from '../../BLL/FriendsReducer';
import Friends from './Friends';

class FriendsPageContainer extends React.Component {
    
    componentDidMount() {
        this.props.getFriends();
    }

    render() {
        // debugger
        if (!this.props.users.length) {
            return <div>Users not found</div>
        } else {
            return <Friends {...this.props}/>
        }
    }
}

const mapStateToProps = (state) => {
    // debugger
    return {
        filter: state.friendsPage.filter,
        users: usersSelector(state),
        status: state.friendsPage.status,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsers(users))
        },
        setStatus: (status) => {
            dispatch(setStatus(status))
        },
        getFriends: () => {
            dispatch(getFriends())
        },
        subscribe: (userId, followed) => {
            dispatch(subscribeToUser(userId, followed))
        },
        unsubscribe: (userId, followed) => {
            dispatch(unSubscribeToUser(userId, followed))
        }
    }
}


FriendsPageContainer = connect(mapStateToProps, mapDispatchToProps) (FriendsPageContainer)
export default FriendsPageContainer;