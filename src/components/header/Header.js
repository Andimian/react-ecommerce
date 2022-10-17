import React from 'react';
import {NavLink} from "react-router-dom";
import './header.scss';

const Header = () => {
    return (
        <header>
            <div className="">
                <span className='logo'>Shop</span>
            </div>
            <nav>
                <NavLink to="/">Каталог</NavLink>
                <NavLink to="/cart">Корзина</NavLink>
            </nav>
        </header>
    );
};

export default Header;