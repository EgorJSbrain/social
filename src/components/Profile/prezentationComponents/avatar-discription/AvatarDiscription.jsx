import React from 'react';
import style from './AvatarDiscription.module.css'
import UserDiscription from './Discription/Discription'
import PropTypes from 'prop-types';
import User from '../../../User/User';


const AvatarDiscription = (props) => {
//  let photos = props.users.photos
  debugger;
  return (
    <div className={style.avatar}>
      
        <div>
          {/* <img src={ 
              props.user.photos.small == null ? "https://via.placeholder.com/100" : user.photos.small
            } alt=""></img>   */}
        </div>
         
       <User data={props.user}/>

    </div>
  )

}
AvatarDiscription.propTypes = {
  data: PropTypes.shape({
    familyStatus: PropTypes.string,
    city: PropTypes.string,
    birthday: PropTypes.string,
  }),
  photo: PropTypes.string
}

export default AvatarDiscription;