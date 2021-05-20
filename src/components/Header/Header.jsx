import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';



function Header(props) {
    return (
        <header className="main-header">
            <h1 className="main-header__name">
                <NavLink to='/article'>
                    SHARETRADE.<span className="main-header__name-domen">COM</span>
                </NavLink>
            </h1>
        </header>
    );
}

export default Header;