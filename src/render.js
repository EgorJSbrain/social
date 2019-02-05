import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, addMessage } from './redux/state'




export const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <App state={state}
             addPost={addPost}
             addMessage={addMessage}/>, 
        document.getElementById('root')
    );
}
// debugger