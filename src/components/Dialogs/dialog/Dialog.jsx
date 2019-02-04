import React from 'react';
import s from './Dialog.module.css'
import PropTypes from 'prop-types';


const Dialog = (props) => {
    // debugger
    return (
        <div className={s.block}>
            <div className={s.img}>
                <img src={props.dialog.photo} alt="" className={s.img}></img>
            </div>
            <div>
                Name: {props.dialog.name}
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