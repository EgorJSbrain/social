import React from 'react';
import style from './AvatarDiscription.module.css'
import Discription from './Discription/Discription'


const AvatarDiscription = (photo, data) => {
  
  debugger;
  return (
    <div className={style.avatar}>
      
        <div>
          <img src={ photo }></img>  
        </div>
         
       <Discription data={data}/>

    </div>
  )

}

export default AvatarDiscription;