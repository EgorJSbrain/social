import React from 'react';
import style from './AvatarDiscription.module.css'
import PropTypes from 'prop-types';
import User from '../../../User/User1Container';


const AvatarDiscription = (props) => {
  // debugger;
  return (
    <div className={style.avatar}>
         <User />
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