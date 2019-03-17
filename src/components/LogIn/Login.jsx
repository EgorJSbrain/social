import React from 'react';
import styles from './Login.module.css';
import { connect } from 'react-redux';
import { loginThunk, statuses } from '../.././BLL/LoginReducer';
import {Redirect} from 'react-router-dom';

const Login = (props) => {
    // debugger
    let isAuth = props.isAuth;
    let {status, login, message} = props;
    let loginRef = React.createRef();
    let passwordRef = React.createRef();
    let rememberMeRef= React.createRef();
    const onClickLogin = () => {
        login && login( loginRef.current.value,
                        passwordRef.current.value,
                        rememberMeRef.current.checked )
    };
    let errorMessageBlock = status === statuses.ERROR && <div className='error'>{message}</div>
    if (isAuth) {
        return <Redirect to='/profile'/>
    }

    return <div className={styles.login}>
                <div>LOGIN<input ref={loginRef} type='text' defaultValue='egorpobylets@gmail.com'/></div>
                <div>PASSWORD<input ref={passwordRef} type='password' defaultValue='12345'/></div>
                <div>REMEMBER ME<input ref={rememberMeRef} type='checkbox'/></div>
                <div><button 
                        onClick={onClickLogin} 
                        className={styles.button}
                        disabled={status === statuses.INPROGRESS}
                    >Login</button></div>
                {errorMessageBlock}
           </div>
}


let mapStateToProps = (state) => {
    return {
         isAuth: state.auth.isAuth,
         status: state.login.status,
         message: state.login.message,
         captchaUrl: state.login.captchaUrl
    }
}
let mapDispatchToprops = (dispatch) => {
    return {
        login: (login, password, rememberMe) => {
            dispatch(loginThunk(login, password, rememberMe))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToprops)(Login);