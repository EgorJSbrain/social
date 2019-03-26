import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ProfileReducer from './BLL/ProfileReducer';
import DialogsReducer from './BLL/DialogsReducer';
import UsersReducer from './BLL/UsersReducer';
import FriendsReducer from './BLL/FriendsReducer';
import LoginReducer from './BLL/LoginReducer';
import thunk from 'redux-thunk'
import AuthReducer from './BLL/AuthReducer';
import createSagaMiddleware from 'redux-saga';
import { sagaRootSocialNetwork } from './BLL/saga';

let combinedReducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    users: UsersReducer,
    friendsPage: FriendsReducer,
    login: LoginReducer,
    auth: AuthReducer
});

const sagaMiddleware = createSagaMiddleware();

let midlewares = applyMiddleware(thunk, sagaMiddleware);
let store = createStore(combinedReducers, midlewares);
sagaMiddleware.run(sagaRootSocialNetwork);

const rerenderEntireTree = (store) => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, 
        document.getElementById('root')
    );
}
rerenderEntireTree(store);










// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
