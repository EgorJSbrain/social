import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
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
import ContactPage from './components/User/contactFormPageContainer';
// import User from './components/User/User';


const App = (props) => {
  
  // let users  = props.users;
  // debugger
    return (
      <BrowserRouter>
        <div className='wrapper'>
            <HeaderContainer />
            { props.isAuth ? <Navigation /> : null}
            
              <div className="app__wrapper-block">
                { props.isAuth && <Route path='/user/:userId?' render={() => <ProfileContainer /> }/>}
                { props.isAuth && <Route path='/profile/:userId?' render={() => <ProfileContainer /> }/>}
                { props.isAuth && <Route path='/dialogs' render={() => <DialogsContainer />}/>}
                { props.isAuth && <Route path='/friends' render={() => <FriendsPageContainer />}/>}
                { props.isAuth && <Route path='/news' component={News}/>}
                { props.isAuth && <Route path='/music' component={Music}/>}
                { props.isAuth && <Route path='/settings' component={Settings}/>}
                <Route path='/form1' component={ContactPage}/>
                <Route path='/form2' component={ContactPage}/>
                {/* <Route path='/users/:userId?' component={User}/> */}
              </div>  
              <div>
                <Route exact path='/' render={() => <Login />}/>
              </div>
        </div>
      </BrowserRouter>);
  }

  
  export default App;

