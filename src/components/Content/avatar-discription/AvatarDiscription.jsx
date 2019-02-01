import React from 'react';
import style from './AvatarDiscription.module.css'
import Discription from './Discription/Discription'
import PropTypes from 'prop-types';


const AvatarDiscription = (props) => {
  
  // debugger;
  return (
    <div className={style.avatar}>
      
        <div>
          <img src={ props.photo } alt=""></img>  
        </div>
         
       <Discription data={props.data}/>

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