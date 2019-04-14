import React from 'react';
import ContactPage from './contactFormPageContainer';


const User1 = (props) => {
    // debugger
    //  console.log(props)
    let refAvatar = React.createRef()
    let toggle = props.toggle;
    let isOwner = props.id === ( props.profile && props.profile.userId );
    
        
    return (
        props.profile && <>
            <h2>{props.profile.fullName}</h2>
            <img src={props.profile.photos.large} alt=''></img>
            
            {!toggle ?
                <div>
                    {isOwner && <button onClick={ () => props.changeToggle() }>edit</button>}
                    {isOwner && <input ref={refAvatar} type='file' onChange={(ref) => props.addAvatar(ref)}/>}
                    <span>{props.profile.aboutMe}</span>
                    {Object.keys(props.profile.contacts).map(key => {    
                        return <div>
                            <b>{key}: </b>
                            <span>{props.profile.contacts[key]}</span>
                        </div>})}
                </div> :
                <div>
                    <ContactPage />
                </div>
            }
            

        </>
    )
}

export default User1;