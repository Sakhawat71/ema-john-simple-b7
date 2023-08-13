// eslint-disable-next-line no-unused-vars
import React from "react";
import './Header.css';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className="header">
            <div>
                <img src={logo} alt="" />
            </div>
            <div className="link">
                <a href="/order">Order</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;
