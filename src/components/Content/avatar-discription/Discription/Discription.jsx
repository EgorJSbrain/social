import React from 'react';
import style from './Discription.module.css'


const Discription = ({data }) => {
  debugger;
  return (
   
        <div className={style.info}> 
          
          <div>
            День рождения:{data.birthday}
          </div>
          
          <div>
            Город: {data.city}
          </div>
          
          <div>
            Семейное положение: {data.status}
          </div>
          
          <div>
            discription4:
          </div>
        </div>
      

    
  )

}

export default Discription;