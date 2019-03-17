import React from 'react';
import style from './FriendBlock.module.css';
import PropTypes from 'prop-types';


const FriendBlock = (props) => {
    
  //  debugger;
    return (
      <div className={style.friend}>
          
            <div>
              <img src={props.friend.photo} alt="" className={style.avatar}></img>
            </div>
             <div className={style.name}>{props.friend.name}</div>
          
      </div>    
    )
        
}

FriendBlock.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    photo: PropTypes.string
  })
};

export default FriendBlock;

