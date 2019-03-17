import React from 'react';
import style from './Discription.module.css'


const Discription = (props) => {
  // debugger;
  return (
   
        <div className={style.info}> 
          
          <div>
            День рождения:{props.data.birthday}
          </div>
          
          <div>
            Город: {props.data.city}
          </div>
          
          <div>
            Семейное положение: {props.data.familyStatus}
          </div>
          
          <div>
            discription4:
          </div>
        </div>
      

    
  )

}

export default Discription;