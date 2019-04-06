import { connect } from 'react-redux';
import AvatarDiscription from '../prezentationComponents/avatar-discription/AvatarDiscription'
import { usersSelector } from '../../../BLL/FriendsReducer';
// import { photosUsersSelector } from '../../../BLL/FriendsReducer';



const mapStateToProps = (state) => {
    // debugger
    return {
        users: usersSelector(state),
        //user: state.users.users[0]
    }
    
}

const AvatarDiscriptionContainer = connect (mapStateToProps, null)(AvatarDiscription);

export default AvatarDiscriptionContainer;
