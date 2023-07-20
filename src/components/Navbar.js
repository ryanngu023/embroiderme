import React, {useState} from 'react';

import { NavLink } from "react-router-dom";

import '../style.css' 

import logoKitties from '../components/pictures/kitties/hajinKitties.png'

export default function Navbar(props) {
    const [menuState, setMenuState] = useState(false);

    const handleMenuToggle = () => {
        setMenuState(!menuState);
    }

    return (
        <nav>
            <div className={`sidebar hidden ${menuState ? 'open' : ''}`}>
                <div className={`topSection display ${menuState ? 'reveal' : ''}`}>
                    <div className="close" onClick={handleMenuToggle}>
                        <div className='line'></div>
                    </div>
                </div>
                <div className={`display ${menuState ? 'reveal' : ''}`}>
                    <ul className='nav-links'>
                        <li><NavLink data-text='Shop' className='navLink' onClick={handleMenuToggle} to="/shop">Shop</NavLink></li>
                        <li><NavLink data-text='About' className='navLink' onClick={handleMenuToggle} to="/about">About</NavLink></li>
                        <li><NavLink data-text='FAQ' className='navLink' onClick={handleMenuToggle} to="/faq">FAQ</NavLink></li>
                        <li><NavLink data-text='Contact' className='navLink' onClick={handleMenuToggle} to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
            </div>
            
        <div className='navbar'>
            <div className="hamburger" onClick={handleMenuToggle}>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </div>
            <div className='homeLogo' style = {{size: 10}}>
                <NavLink to='/' ><img src = '../../public/img/favicon.ico' style = {{size: 10}}/></NavLink>
            </div>
            <div className='cart'>
            <img id = 'cart-img' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACUElEQVR4nO2ZPWtUQRSGn9WAEsS0foUQNRo/QCTY5A8YCaKVnaCSqBERCQh2VoKNjQgWFhqMJhJEghEri5hSrGwUAgG/BRcNgkXErBx4L1wk7JJ1ztw7kAem2b3znvMus3PPmYEVykc/8AGo1RnfgRfACaBCSfnYwMS/Y7SsZt7nkny3xPeW9CZgEPip545TQg7JjJnoa/DsaRl5ReKsAb7JzC4SZ1RGhkicQRkZJ3F2yMjXsu5ezWzZ3STOAxk5S+KckZExEqdbRj6v/E9KxPgyazSPMRPCyFAJjMyGMLI79z+JzV3FvhJCzF6GXyS4k3isUxW+CGwNJTohI1YVx+KUYj4PKXpeoveJx4xHT7RXop+IQ5eW1DzQGlK4ouKxpiDeXFWs2x7ijyQ+gC+r1MVarF6PABckfg9fDirOW6+yaJ8CWN8fo5K47BWgkuvjtznFaAN+AX+Adhx5LCO2x3twTvrPcOaiAo046b+U/jGc2V/ngO9/2SPtKrCWCFtjVQE7A2tfl+5NIjGpgHbQHYoWVdem20MkhhXwTkDNI9J8TUR6FHTOYTccJiKrdY8Sugv8DWwgMk8Cm1gEblAAl5TALRLngIy8IXFa1PTUdMuVNJMycpLEGZCRaRJnfa5cuQZ0aGtOkqPAQsBteLpIM4cDGlkANhZlZERJ2Etys8ZUg3uVsTpz7BK2ELKq1ZLJaM/1FktRrTPnBwWRvU+2LCOp+SbmuJOdd00pMRtP9dlEwDlRrrGz05X8sOWzPeAcYmBr/aGWjA37VRsl1Mwc/gIXmFSH9pqNAQAAAABJRU5ErkJggg==" />
            </div>
        </div>
    </nav>
    )
}