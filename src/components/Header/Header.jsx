import React from 'react';
import './Header.scss';

function Header(props) {
    return (
        <header className="main-header">
            <div className="container">
                <h1 className="main-header__name">
                    SHARETRADE.<span className="main-header__name-domen">COM</span>
                    </h1>
            </div>
        </header>
    );
}

export default Header;