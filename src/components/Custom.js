import React from "react";
import ContactForm from "./ContactForm";

export default function Custom(props) {
    return (
        <div className="contactbody">
            <div className='textbox'>
                <h2>Custom Order</h2>
                <p>Custom order can be requested upon this page.
                    Personal images can be uploaded so that our 
                    digitizing manager can assess whether the image
                    is reasonable enough to embroider. Follow the
                    guidelines below for choosing an image.</p>
            </div>
            <div className="textbox custom_steps">
                <div>
                    <div>
                        <p>(1)</p>
                        <p>You send the product design below, and I will confirm with you via email if it’s possible to create or not.</p>
                    </div>
                    <img src='/img/mangodesignevelope.png' alt='Process of sending product design through form' />
                </div>

                <div>                    
                    <img src='/img/4.png' alt='Process of sending product design through form' />
                    <div>
                        <p>(2)</p>
                        <p>Talk thru email / zoom call (20 minute max)</p>
                    </div>
                </div>

                <div>
                    <div>
                        <p>(3)</p>
                        <p>We will create one free visual sample based on your request. if the customer likes it, then they can pay the price of the product.</p>
                    </div>
                    <img src='/img/4.png' alt='Process of sending product design through form' />
                </div>

                <div>                    
                    <img src='/img/11.png' alt='Process of sending product design through form' />
                    <div>
                        <p>(4)</p>
                        <p>We will revise the product until finalization.</p>
                    </div>
                </div>

                <div>
                    <div>
                        <p>(5)</p>
                        <p>Product gets shipped out! :D</p>
                    </div>
                    <img src='/img/8.png' alt='Process of sending product design through form' />
                </div>

                <div>                    
                    <img src='/img/12.png' alt='Process of sending product design through form' />
                    <div>
                        <p>(6)</p>
                        <p>Customer received product. is happy. leaves a positive review on the website.</p>
                    </div>
                </div>

                <div className='examples'>
                    <p>GOLDEN STANDARD</p>
                </div>

                <div className='examples'>
                    <p>POOR STANDARD</p>
                </div>
            </div>
            
            <ContactForm />
        </div>
    )
}