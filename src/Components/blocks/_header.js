import React from 'react';
import { Link } from 'react-router-3';

import './_header.css';

const Header = () => {
    return (
        <nav className="header">
            <Link to={"/"}>
                <div className="header__logo">
                    <p className="header__logo-l">l</p>
                    <p className="header__logo-slash">/</p>
                    <p className="header__logo-s">s</p>
                </div>
            </Link>
            <div className="header__links">
                <Link to={"learn"} className="header__links__link">
                    <p className="header__links__link__learn">learn</p>
                </Link> 
                <Link to={"share"} className="header__links__link">
                    <p className="header__links__link__listen">share</p>
                </Link> 
            </div>
        </nav>
    )
}

export default Header;