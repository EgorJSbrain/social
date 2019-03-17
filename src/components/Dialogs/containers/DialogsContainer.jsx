import { connect } from 'react-redux';
import Dialogs from '../Dialogs';
import { addMessageActionCreator, 
         addNewMessageActionCreator } from '../../../BLL/DialogsReducer';

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        users: state.users,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (message) => {
            message && 
            dispatch(addMessageActionCreator(message))
        },
        sendTextOnChange: (textMessage) => { 
            dispatch(addNewMessageActionCreator(textMessage))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;