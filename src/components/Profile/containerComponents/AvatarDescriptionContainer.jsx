import { connect } from 'react-redux';
import AvatarDiscription from '../prezentationComponents/avatar-discription/AvatarDiscription'



const mapStateToProps = (state) => {
    return {
        user: state.users.users[0]
    }
}

const AvatarDiscriptionContainer = connect (mapStateToProps, null)(AvatarDiscription);

export default AvatarDiscriptionContainer;
