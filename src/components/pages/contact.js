import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

export default function contact(props) {
    return (
        <div className='contactbody'>
            <h1 className='contactheader'>CONTACT US</h1>
            <div className="helpbox">
                <p>Hey, what type of assistance do you need?</p>
                <p>—ฅ/ᐠ. ̫ .ᐟ\ฅ—</p>
                <Dropdown>
                    <Dropdown.Toggle>
                        Dropdown Button
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Regular Assistance</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Custom Order</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
}