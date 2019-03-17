import { connect } from 'react-redux';
import ProfileWall from '../prezentationComponents/contWall/ProfileWall';
import { addPostActionCreator, 
         addNewCommentTextareaCreator } from '../../../BLL/ProfileReducer';


const mapStateToProps = (state) => {
    return {
        profileWall: state.profilePage,
        newPostMessage: state.profilePage.newPostMessage
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (post) => {
          post &&
            dispatch(addPostActionCreator(post))
        },
        sendPostOnChange: (text) => {
          dispatch(addNewCommentTextareaCreator(text))
      }
    }
  }
// debugger

const ProfileWallContainer = connect (mapStateToProps, mapDispatchToProps)(ProfileWall); 

export default ProfileWallContainer;
