import Profile from "../Profile";
import { connect } from 'react-redux';
import { addPostActionCreator, 
         addNewCommentTextareaCreator } from "../../../BLL/ProfileReducer";


const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        newPostMessage: state.profilePage.newPostMessage
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

const ContentContainer = connect (mapStateToProps, mapDispatchToProps)(Profile);

export default ContentContainer;