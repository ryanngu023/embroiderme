import React from "react";
import ContactForm from "./ContactForm";

export default function Assistance(props) {

    return (
        <div className="contactbody">
            <div className='textbox'>
                <h2>Regular Assistance</h2>
                <p>Use this form to get in touch with us with any questions, concerns, or issues that you may have!</p>
            </div>
            <ContactForm />
        </div>
    )
}