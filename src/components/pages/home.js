import React from "react";

import { NavLink } from "react-router-dom";


export default function Home(props) {
    return (
        <div>
            <div className='homebanner'>
                <h1>Welcome to EmbrioderMe</h1>
            </div>
            {/* In between Sections */}
            <div className="othersection">
                <h2>Others</h2>
                <p className='relevantlinks'><NavLink to='/sizeguide'>Size Guide</NavLink></p>
            </div>
        </div>
    )
}