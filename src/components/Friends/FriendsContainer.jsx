import React from 'react';
import {connect} from 'react-redux';
import { setStatus, getFriends, subscribeToUser, unSubscribeToUser, setFilter, getFilteredUsersSelector } from '../../BLL/FriendsReducer';
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
        users: getFilteredUsersSelector(state),
        status: state.friendsPage.status,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
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
        },
        setFilter: (filter) => {
            dispatch(setFilter(filter))
        }
    }
}


FriendsPageContainer = connect(mapStateToProps, mapDispatchToProps) (FriendsPageContainer)
export default FriendsPageContainer;