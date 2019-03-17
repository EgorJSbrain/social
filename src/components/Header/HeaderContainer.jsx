import React, {Component, Fragment} from 'react';
import styles from './Header.module.css';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import { me } from '../../BLL/AuthReducer';

const Header = ( { isAuth } ) => {
    debugger
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
                <div className={styles.button__logout}>
                    Log Out
                </div>
            </Fragment> 
        }
        {!isAuth && 
                <div>
                    <div className={styles.button__signin}>
                        Sign In
                    </div>
                    <div className={styles.button__login}>
                        <NavLink to='/' className={styles.login}> Log In </NavLink>   
                    </div>
                </div>}
        </div>
    )
}

class HeaderContainer extends Component {
    componentWillMount() {
        this.props.me();
    }
    render() {
        return <Header {...this.props}/>
    }
};

let mapStateToProps = (state) => {
    return {
        userInfo: state.auth.userInfo,
        isAuth: state.auth.isAuth
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        me: () => {
            dispatch(me())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);