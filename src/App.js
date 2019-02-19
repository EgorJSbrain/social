import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Content from './components/Content/Content';
// import Footer from './components/Footer/Footer';
// import Aside from './components/Aside/Aside';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';


const App = (props) => {
  
  
  let { data, posts } = props.state.profilePage;
  let { messages } = props.state.dialogsPage;
  let users  = [...props.state.dialogsPage.users];
  // debugger
    return (
      <BrowserRouter>
        <div className='wrapper'>
          
            <Header />
            <Navigation users={users}/>
            {/* <Footer />
            <Aside /> */}

              <div className="app__wrapper-block">
                <Route path='/profile' render={() => <Content posts={posts} data={data} store={props.store}/>}/>
                <Route path='/dialogs' render={() => <Dialogs messages={messages} users={users} store={props.store}/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
                
              </div>  
              
            
            
        </div>
      </BrowserRouter>);
  }

  export default App;

