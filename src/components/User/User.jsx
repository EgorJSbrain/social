import React, {Component} from 'react';
import axios from "../../DAL/axios-instatnce";
import {withRouter} from 'react-router-dom';
// import {NavLink} from 'react-router-dom';


class User extends Component {
    constructor(props){
        super(props);
        this.state = {
            profile: null,
            editMode: false,
            me: null,
            isOwner: false
        }
    };
    componentDidMount(){
        let userIdFromUrl = this.props.match.params.userId;
        console.log(userIdFromUrl);
        let profilePromis = axios.get('profile/' + userIdFromUrl)
            .then( response => {
                this.setState({profile: response.data});  
            });
        let mePromise = axios.get('auth/me')
            .then( response => {
            this.setState({me: response.data.data});
        });
        Promise.all([profilePromis, mePromise]).then(()=> {
            let {profile, me} = this.state;
            if (!!me && !!profile && me.id === profile.userId) {
                this.setState({isOwner: true})
            }
        })
           
    
    };
    onEditClick = () => {
        this.setState({editMode: true})
    };
    onContactChange = (newValue, contactKey) => {
        this.state.profile.contacts[contactKey] = newValue;
        // this.state({profile: this.state.profile})
        this.forceUpdate()
    };
    onSaveClick = () => {
        axios.put('profile', this.state.profile)
            .then((res) => {
                 
            })
        this.setState({editMode: false})
    }
    onAboutMe = (e) => {
        let newValue = e.target.value;
          this.state.profile.aboutMe = newValue;
          this.forceUpdate()
    }
    onLookingForAJobChange = (check) => {
        this.state.profile.lookingForAJob = check;
        this.forceUpdate();
    }
    render() {
        let { profile, isOwner, editMode } = this.state;
        
        if(this.state.profile) {
            return <div>
                
                        <h2>{this.state.profile.fullName}</h2>
                        {isOwner && <span onClick={this.onEditClick}>edit</span>}
                       
                        <div>
                            <div>
                                {editMode ? <textarea 
                                        value={profile.aboutMe} 
                                        placeholder={'text'}
                                        onChange= {this.onAboutMe}></textarea> 
                                : profile.aboutMe}
                            </div>
                           
                            {
                                Object.keys(profile.contacts).map(key => {
                                    return <div>
                                                <b>{key}: </b>
                                                {this.state.editMode ? <input value={profile.contacts[key]}
                                                                              onChange={(e) => {
                                                                                let newValue = e.target.value
                                                                                this.onContactChange(newValue, key)}}/> :
                                                <span>{profile.contacts[key]}</span>}
                                            </div>
                                })
                            }
                            { editMode ? <input 
                                            type='checkbox' 
                                            checked={profile.lookingForAJob}
                                            onChange={ e => {
                                                let checked = e.target.checked;
                                                this.onLookingForAJobChange(checked)
                                            }}/> 
                                            : <div>{profile.lookingForAJob ? 'Ищу работу' : ''}</div>}
                            { editMode && <button onClick={this.onSaveClick}>Save</button>}
                            
                        </div>
            </div>
        } else {
            return <div>loading...</div>
        }  
    }
    
}

export default withRouter(User);
