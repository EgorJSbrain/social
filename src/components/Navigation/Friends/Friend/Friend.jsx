import React from 'react';
import style from './Friend.module.css';
import PropTypes from 'prop-types';


const Friend = (props) => {
    
  // debugger;
    return (
      <div className={style.friend}>
          
            <div>
              <img src={props.friend.photo} alt="" className={style.avatar}></img>
            </div>
            <div className={style.name}>{props.friend.name}</div>
          
      </div>    
    )
        
}

export default Friend;

Friend.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    photo: PropTypes.string
  })
};