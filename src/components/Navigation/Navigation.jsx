import React from 'react';
import navigation from './Navigation.module.css';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
    <nav className={navigation.link}>
            <div className={`${navigation.link} ${navigation.back}`}>
                <NavLink to="/profile" activeClassName={navigation.active}>Profile</NavLink>
            </div>
            <div className={`${navigation.link} ${navigation.back}`}>
                <NavLink to="/dialogs" activeClassName={navigation.active}>Messages</NavLink>
            </div>
            <div className={`${navigation.link} ${navigation.back}`}>
                <NavLink to="/news" activeClassName={navigation.active}>News</NavLink>
            </div>
            <div className={`${navigation.link} ${navigation.back}`}>
                <NavLink to="/music" activeClassName={navigation.active}>Music</NavLink>
            </div>
            <div className={`${navigation.link} ${navigation.back}`}>
                <NavLink to="/settings" activeClassName={navigation.active}>Settings</NavLink>
            </div>
        </nav>
    )

}

export default Navigation;