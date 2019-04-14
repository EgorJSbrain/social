import React from 'react';
import { connect } from 'react-redux';
import AvatarDiscription from '../prezentationComponents/avatar-discription/AvatarDiscription'
import { usersSelector } from '../../../BLL/FriendsReducer';
import {withRouter} from 'react-router-dom';
// import { getAvatarOfUser } from '../../../BLL/ProfileReducer';
// import { photosUsersSelector } from '../../../BLL/FriendsReducer';

class AvatarDescriptionComtainer extends React.Component {
    render() {
        return(
            <AvatarDiscription {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: usersSelector(state),

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

let AvatarDiscriptionContainer = connect(mapStateToProps, mapDispatchToProps)(AvatarDescriptionComtainer);
AvatarDiscriptionContainer = withRouter(AvatarDiscriptionContainer)

export default AvatarDiscriptionContainer;
