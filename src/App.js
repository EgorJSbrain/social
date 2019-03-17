import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import HeaderContainer from './components/Header/HeaderContainer';
import DialogsContainer from './components/Dialogs/containers/DialogsContainer';
import ProfileContainer from './components/Profile/containerComponents/ProfileContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import FriendsPageContainer from './components/Friends/FriendsContainer';
import Login from './components/LogIn/Login';


const App = (props) => {
  
  let users  = props.state.users.users;
  
    return (
      <BrowserRouter>
        <div className='wrapper'>
            <HeaderContainer />
            <Navigation users={users}/>
              <div className="app__wrapper-block">
                <Route path='/profile' render={() => <ProfileContainer />}/>
                <Route path='/dialogs' render={() => <DialogsContainer />}/>
                <Route path='/friends' render={() => <FriendsPageContainer />}/>
                <Route exact path='/' render={() => <Login />}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
                

              </div>  
        </div>
      </BrowserRouter>);
  }

  const mapStateToProps = (state) => {
    return {
        state: state
    }
  }
  export default connect (mapStateToProps) (App);

