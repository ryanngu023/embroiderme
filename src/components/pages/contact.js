import React, {useState} from "react";

import { Link } from "react-router-dom";

export default function Contact(props) {
    const [dropdownState, setDropdownState] = useState(false);


    function handleDropdownToggle() {
        setDropdownState(!dropdownState);
    }

    return (
        <div className='contactbody'>
            <h1 className='contactheader'>CONTACT US</h1><div className="helpbox">
                <p>Hey, what type of assistance do you need?</p>
                <button className={`dropdownButton ${dropdownState ? 'toggled' : ''}`} onClick={handleDropdownToggle}>Select an Option V </button>
                {dropdownState &&
                    (<div className='dropdown'>
                        <ul className='dropdownitems'>
                            <Link className="contactLink" to="/contact/help"><li>Regular Assistance</li></Link>
                            <Link className="contactLink" to="/contact/custom"><li>Custom Order</li></Link>
                        </ul>
                    </div>)}
                <div className='textcat'>—ฅ/ᐠ. ̫ .ᐟ\ฅ—</div>
            </div>
        </div>
    )
}