import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <header>
            <div className="">
                <span className='logo'>Shop</span>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Каталог</Link> |{" "}
                    </li>
                    <li>
                        <Link to="/cart">Корзина</Link> |{" "}
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Footer;