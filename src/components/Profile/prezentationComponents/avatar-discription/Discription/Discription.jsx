
// import React, {Component} from 'react';
// import {withRouter} from 'react-router-dom';
// import axios from '../../../../../DAL/axios-instatnce';
// // import {NavLink} from 'react-router-dom';


// class UserDiscription extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             profile: null,
//             editMode: false,
//             me: null,
//             isOwner: false,
//         }
//     };
//     componentDidMount(){
//         debugger
//         let userIdFromUrl = this.props.match.params.userId;
//         console.log(userIdFromUrl);
//         let profilePromis = axios.get('profile/' + userIdFromUrl)
//             .then( response => {
//                 this.setState({profile: response.data});  
//             });
//         let mePromise = axios.get('auth/me')
//             .then( response => {
//             this.setState({me: response.data.data});
//         });

//         Promise.all([profilePromis, mePromise]).then(()=> {
//             let {profile, me} = this.state;
//             if (!!me && !!profile && me.id === profile.userId) {
//                 this.setState({isOwner: true})
//             }
//         })
           
    
//     };
//     onEditClick = () => {
//         this.setState({editMode: true})
//     };
//     onContactChange = (newValue, contactKey) => {
//         this.state.profile.contacts[contactKey] = newValue;
//         // this.state({profile: this.state.profile})
//         this.forceUpdate()
//     };
//     onSaveClick = () => {
//         // debugger
//         axios.put('profile', {
//             "aboutMe": "",
//             "contacts": {
//                 facebook: "",
//                 github: "",
//                 instagram: "",
//                 mainLink: null,
//                 twitter: "",
//                 vk: "",
//                 website: null,
//                 youtube: null
//             },
//             "lookingForAJob": true,
//             "lookingForAJobDescription": 'не ищу',
//             "fullName": "EGOR"
//         })
//             .then((res) => {
                 
//             })
//         this.setState({editMode: false})
//     }
//     onAboutMe = (e) => {
//         let newValue = e.target.value;
//           this.state.profile.aboutMe = newValue;
//           this.forceUpdate()
//     }
//     onLookingForAJobChange = (check) => {
//         this.state.profile.lookingForAJob = check;
//         this.forceUpdate();
//     }
//     render() {
        
//         let { profile, isOwner, editMode } = this.state;
        
//         if(this.state.profile) {
//             return <div>
                
//                         <h2>{this.state.profile.fullName}</h2>
//                         {isOwner && <button onClick={this.onEditClick}>edit</button>}
                       
//                         <div>
//                             <div>
//                                 {editMode ? <textarea 
//                                         value={profile.aboutMe} 
//                                         placeholder={'text'}
//                                         onChange= {this.onAboutMe}></textarea> 
//                                 : profile.aboutMe}
//                             </div>
                           
//                             {
//                                 Object.keys(profile.contacts).map(key => {
//                                     return <div>
//                                                 <b>{key}: </b>
//                                                 {this.state.editMode ? <input value={profile.contacts[key]}
//                                                                               onChange={(e) => {
//                                                                                 let newValue = e.target.value
//                                                                                 this.onContactChange(newValue, key)}}/> :
//                                                 <span>{profile.contacts[key]}</span>}
//                                             </div>
//                                 })
//                             }
//                             { editMode ? <input 
//                                             type='checkbox' 
//                                             checked={profile.lookingForAJob}
//                                             onChange={ e => {
//                                                 let checked = e.target.checked;
//                                                 this.onLookingForAJobChange(checked)
//                                             }}/> 
//                                             : <div>{profile.lookingForAJob ? 'Ищу работу' : ''}</div>}
//                             { editMode && <button onClick={this.onSaveClick}>Save</button>}
                            
//                         </div>
//             </div>
//         } else {
//             return <div>loading...</div>
//         }  
//     }
    
// }

// export default withRouter(UserDiscription);
































// // import React from 'react';
// // import style from './Discription.module.css'


// // const Discription = (props) => {
// //   // debugger;
// //   return (
   
// //         <div className={style.info}> 
          
// //           <div>
// //             День рождения:{props.data.birthday}
// //           </div>
          
// //           <div>
// //             Город: {props.data.city}
// //           </div>
          
// //           <div>
// //             Семейное положение: {props.data.familyStatus}
// //           </div>
          
// //           <div>
// //             discription4:
// //           </div>
// //         </div>
      

    
// //   )

// // }

// // export default Discription;