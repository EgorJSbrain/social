import React from 'react';
import navigation from './Navigation.module.css';
import {NavLink} from 'react-router-dom';
import FriendsBlock from './FriendsBlock/FriendsBlock';
import { connect } from 'react-redux';
import { usersSelector } from '../../BLL/FriendsReducer';


const Navigation = (props) => {
    // debugger

    return (

        <div>
            <nav className={navigation.link}>  
                <NavLink to={`/profile/${props.userId}`} activeClassName={navigation.active} className={`${navigation.link} ${navigation.back}`}>Profile</NavLink>
                <NavLink to="/dialogs" activeClassName={navigation.active} className={`${navigation.link} ${navigation.back}`}>Messages</NavLink>
                <NavLink to="/friends" activeClassName={navigation.active} className={`${navigation.link} ${navigation.back}`}>Friends</NavLink>
                <NavLink to="/news" activeClassName={navigation.active} className={`${navigation.link} ${navigation.back}`}>News</NavLink>
                <NavLink to="/music" activeClassName={navigation.active} className={`${navigation.link} ${navigation.back}`}>Music</NavLink>
                <NavLink to="/settings" activeClassName={navigation.active} className={`${navigation.link} ${navigation.back}`}>Settings</NavLink>    
                <NavLink to="/users" activeClassName={navigation.active} className={`${navigation.link} ${navigation.back}`}>User</NavLink>    
            </nav>

            <div className={navigation.friends}>
                <FriendsBlock users={props.users}/>
            </div>
        </div>
    )

}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setProfile: () => {
//             dispatch(setProfile())
//         }
//     }
// }
const mapStateToProps = (state) => {
    return {
        users: usersSelector(state),
        userId: state.auth.userInfo.userId
    }
  }

  export default connect (mapStateToProps, null) (Navigation);
