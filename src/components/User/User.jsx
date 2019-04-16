// import React, {Component} from 'react';
// import axios from "../../DAL/axios-instatnce";
// import {withRouter} from 'react-router-dom';



// class User extends Component {
//     constructor(props){
//         super(props);
//         this.refAvatar = React.createRef()
//         this.state = {
//             profile: null,
//             me: null,
//             isOwner: false,
//             editMode: false,
//         }
//     };
//     componentDidMount(){
//         let userIdFromUrl = this.props.match.params.userId;
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
//         this.forceUpdate()
//     };
//      onSaveClick = async () => {
//         let userIdFromUrl = this.props.match.params.userId;
//             await axios.put('profile', this.state.profile);
//         let nextResp = await axios.get('profile/' + userIdFromUrl);
//             this.setState({profile: nextResp.data});
//             this.setState({editMode: false});                
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
//     addAvatar = () => {
//         let formData = new FormData();
//         let imagefile = this.refAvatar;
//         formData.append('image', imagefile.current.files[0]);
//         axios.post('profile/photo', formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data'
//             } 
//         }).then(res => (console.log(res.data))
//         )
//     }
//     render() {
//         let { profile, isOwner, editMode } = this.state;
//         if(this.state.profile) {
//             return <div>
//                         <h2>{this.state.profile.fullName}</h2>
//                         <img src={this.state.profile.photos.large} alt=''></img>
//                         {isOwner && <input ref={this.refAvatar} type='file' onChange={this.addAvatar.bind(this)}></input>}
//                         {isOwner && <button onClick={this.onEditClick.bind(this)}>edit</button>}
                       
//                         <div>
//                             <div>
//                                 {editMode ? <textarea 
//                                         value={this.state.profile.aboutMe} 
//                                         placeholder={'text'}
//                                         onChange= {(e) => this.onAboutMe.bind(this)(e)}></textarea> 
//                                 : profile.aboutMe}
//                             </div>
                           
//                             {
//                                 Object.keys(profile.contacts).map(key => {
//                                     return <div>
//                                                 <b>{key}: </b>
//                                                 {this.state.editMode ? <input value={profile.contacts[key]}
//                                                                               onChange={(e) => {
//                                                                                 let newValue = e.target.value
//                                                                                 this.onContactChange.bind(this)(newValue, key)}}/> :
//                                                 <span>{profile.contacts[key]}</span>}
//                                             </div>
//                                 })
//                             }
//                             { editMode ? <input 
//                                             type='checkbox' 
//                                             checked={profile.lookingForAJob}
//                                             onChange={ e => {
//                                                 let checked = e.target.checked;
//                                                 this.onLookingForAJobChange.bind(this)(checked)
//                                             }}/> 
//                                             : <div>{profile.lookingForAJob ? this.state.profile.lookingForAJobDescription : ''}</div>}
//                             { editMode && <button onClick={this.onSaveClick.bind(this)}>Save</button>} 
//                     </div>
//             </div>
//         } else {
//             return <div>loading...</div>
//         }  
//     }    
// }

// export default withRouter(User);
