import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h2>Personal Friend</h2>
            <nav>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/manage">Manage Mentoroy</a>
            </nav>

        </div>
    );
};

export default Header;