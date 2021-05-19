import React from 'react';
import './Header.scss';

function Header(props) {
    return (
        <header className="main-header">
                <h1 className="main-header__name">
                    SHARETRADE.<span className="main-header__name-domen">COM</span>
                </h1>
        </header>
    );
}

export default Header;