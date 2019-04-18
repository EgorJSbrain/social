import React from 'react';
import style from './Dialog.module.css'
import PropTypes from 'prop-types';


const Dialog = (props) => {
    //  debugger
    return (
        <div className={style.dialog_block}>
            
            <div >
                Name: {props.dialog.userName}
            </div>
        </div>
    )
}

export default Dialog;

Dialog.propTypes = {
    dialog: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      photo: PropTypes.string
    })
  };