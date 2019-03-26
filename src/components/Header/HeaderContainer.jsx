import React, {Component, Fragment} from 'react';
import styles from './Header.module.css';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import { me, logOutThunk } from '../../BLL/AuthReducer';
import { setLogin } from '../../BLL/LoginReducer';


const Header = ( { isAuth, logOut, logIn }, props ) => {
    // debugger
    return (
        <div className={styles.wrapper}>

        {isAuth && 
            <Fragment> 
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt=""></img>
                </div>
                <div>
                    <span className={styles.name}>reactNet</span>
                </div>
                <div>
                    <input type="text" className={styles.input}/>
                </div>
                <div className={styles.button__logout} onClick={() => logOut()}>
                    Log Out
                </div>
            </Fragment> 
        }
        {!isAuth && 
                <Fragment>
                    <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt=""></img>
                    </div>
                    <div>
                        <span className={styles.name}>reactNet</span>
                    </div>
                    <div>
                        <input type="text" className={styles.input}/>
                    </div>
                    <div className={styles.button__login} onClick={() => logIn()}>
                        <NavLink to='/' className={styles.login}> Log In </NavLink>
                    </div>
                    
                  
                </Fragment>}
        </div>
    )
}

class HeaderContainer extends Component {
    componentWillMount() {
        this.props.me();
    }
    render() {
        // debugger
        return <Header {...this.props}/>
    }
};

let mapStateToProps = (state) => {
    return {
        userInfo: state.auth.userInfo,
        isAuth: state.auth.isAuth,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        me: () => {
            dispatch(me())
        },
        logOut: () => {
            dispatch(logOutThunk())
        },
        logIn: () => {
            dispatch(setLogin(true))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);