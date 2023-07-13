import React, {useState} from 'react';

import { NavLink } from "react-router-dom";

export default function Navbar(props) {
    const [menuState, setMenuState] = useState(false);

    const handleMenuToggle = () => {
        setMenuState(!menuState);
    }

    return (
        <nav>
            {menuState && (
                <div className='sidebar'>
                    <div className='topSection'>
                        <div className="close" onClick={handleMenuToggle}>
                            <div className='line'></div>
                        </div>
                    </div>
                    <ul className='nav-links'>
                        <li><NavLink onClick={handleMenuToggle} to="/shop">Shop</NavLink></li>
                        <li><NavLink onClick={handleMenuToggle} to="/about">About</NavLink></li>
                        <li><NavLink onClick={handleMenuToggle} to="/faq">FAQ</NavLink></li>
                        <li><NavLink onClick={handleMenuToggle} to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
            )}
        <div className='navbar'>
            <div className="hamburger" onClick={handleMenuToggle}>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </div>
        </div>
    </nav>
    )
}