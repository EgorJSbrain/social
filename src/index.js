import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ProfileReducer from './BLL/ProfileReducer';
import DialogsReducer from './BLL/DialogsReducer';
import UsersReducer from './BLL/UsersReducer';
import FriendsReducer from './BLL/FriendsReducer';
import LoginReducer from './BLL/LoginReducer';
import thunk from 'redux-thunk'
import AuthReducer from './BLL/AuthReducer';
import createSagaMiddleware from 'redux-saga';
import { sagaRootSocialNetwork } from './BLL/saga';
import ContainerApp from './AppContainer';
import { reducer as formReducer } from 'redux-form'

let combinedReducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    users: UsersReducer,
    friendsPage: FriendsReducer,
    login: LoginReducer,
    auth: AuthReducer,
    form: formReducer
});

const sagaMiddleware = createSagaMiddleware();

let midlewares = applyMiddleware(thunk, sagaMiddleware);
let store = createStore(combinedReducers, composeWithDevTools(midlewares));
sagaMiddleware.run(sagaRootSocialNetwork);


    ReactDOM.render(
        <Provider store={store}>
            <ContainerApp />
        </Provider>, 
        document.getElementById('root')
    );











// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
