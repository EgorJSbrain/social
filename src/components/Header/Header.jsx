// import React, {Component} from 'react';
// import styles from './Header.module.css';
// import { connect } from 'react-redux';
// import {NavLink} from 'react-router-dom';

// const Header = ( { isAuth }, ...props) => {
//     debugger
//     return (
//         <div className={styles.wrapper}>

//             <div>
//                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt=""></img>
//             </div>
//             <div>
//                 <span className={styles.name}>reactNet</span>
//             </div>
//             <div>
//                 <input type="text" className={styles.input}/>
//             </div>
//             <div className={styles.button__logout} onClick={props.logOut}>
//                 Log Out
//             </div>

//         {isAuth && <div>
//                         <div className={styles.button__signin}>
//                             Sign In
//                         </div>
//                         <div className={styles.button__login}>
//                             <NavLink to='/' className={styles.login}> Log In </NavLink>   
//                         </div>
//                     </div>}
//         </div>
//     )
// }

// class HeaderContainer extends Component {
//     render() {
//         debugger
//         return <Header {...this.props}/>
//     }
// }

// let mapStateToProps = (state) => {
//     return {
//         userInfo: state.auth.userInfo,
//         isAuth: state.auth.isAuth
//     }
// }

// let mapDispatchToProps = (dispatch) => {
//     return {
//         logOut: () => {
//             dispatch(logOutThunk())
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);