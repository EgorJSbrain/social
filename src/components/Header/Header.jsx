import React from 'react';
import wrapper from './Header.module.css'

const Header = () => {
    return (
        <div className={wrapper.wrapper1}>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt=""></img>
            </div>
            <div>
                <span className={wrapper.name}>reactNet</span>
            </div>
            <div>
                <input value="" className={wrapper.input}/>
            </div>
            <div className={wrapper.button1}>
                Sign In
            </div>
            <div className={wrapper.button2}>
                Login
            </div>
        </div>
    )

}

export default Header;