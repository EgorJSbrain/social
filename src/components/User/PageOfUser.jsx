import React from 'react';
import ContactPage from './contactFormPageContainer';
import style from './User.module.css'



const PageOfUser = (props) => {
    // debugger
    //  console.log(props)
    let refAvatar = React.createRef()
    let toggle = props.toggle;
    let isOwner = props.id === ( props.profile && props.profile.userId );
    
        
    return ( 
            props.profile && <div className={style.avatar}>
            <div className={style.avatarb_lock}>
                <h2 className={style.user_name}>{props.profile.fullName}</h2>
                <img src={props.profile.photos.large} alt='' className={style.user_avatar}></img>
                {
                    isOwner && <>
                    <input id="upload" ref={refAvatar} type='file' onChange={(ref) => props.addAvatar(ref)} className={style.button_add_avatar}/>
                    <label htmlFor="upload" className={style.label_add_avatar}>Add photo</label>
                </>
                }
            </div>
                
            <div className={style.discription}>
                {!toggle ?
                    <div>
                        {
                            isOwner && <>
                                        <button id="edit"onClick={ () => props.changeToggle()} className={style.button_edit}>edit</button>
                                        <label htmlFor="edit"><img src="https://cdn1.iconfinder.com/data/icons/pinterest-ui/48/jee-07-512.png" className={style.edit_label} alt=""/></label>
                                       </>
                        }
                        
                        {/* {isOwner && <input ref={refAvatar} type='file' onChange={(ref) => props.addAvatar(ref)} className={style.button_add_avatar}/>} */}
                        <span>{props.profile.aboutMe}</span>
                        <div className={style.discription_block}>
                            {Object.keys(props.profile.contacts).map( (key, index) => {    
                                return <div className={style.user_discription_block} key={index}>
                                    <b className={style.input_block}>{key}: </b>
                                    <span className={style.input_block_information}>{props.profile.contacts[key]}</span>
                                </div>})}
                        </div>
                        </div> :
                        <div>
                            <ContactPage />
                        </div>
                }
            </div>
        </div>
    )
}

export default PageOfUser;