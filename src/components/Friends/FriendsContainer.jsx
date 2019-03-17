import React from 'react';
import {connect} from 'react-redux';
import { setUsers, setStatus, getFriends } from '../../BLL/FriendsReducer';
import Friends from './Friends';

class FriendsPageContainer extends React.Component {
    
    componentDidMount() {
        this.props.getFriends();
    }

    render() {
        if (!this.props.users.length) {
            return <div>Users not found</div>
        } else {
            return <Friends {...this.props}/>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.friendsPage.users,
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
        }
    }
}


FriendsPageContainer = connect(mapStateToProps, mapDispatchToProps) (FriendsPageContainer)
export default FriendsPageContainer;