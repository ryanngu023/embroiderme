import React from "react";

export default function Assistance(props) {
    return (
        <div className="contactbody">
            <div className='textbox'>
                <h2>Regular Assistance</h2>
                <p>Use this form to get in touch with us with any questions, concerns, or issues that you may have!</p>
            </div>
            <form className="helpform">
                <input type='text' name='name' placeholder="Name"></input>
                <input type='text' name='email' placeholder="Email"></input>
                <input type='text' name='phonenum' placeholder="Phone Number"></input>
                <textarea name='message' placeholder="Enter your question, concern or issue."></textarea>
                <input id='uploadmedia' type='file' name='attachments'></input>
                <input id='sendbutton' type='submit' value='Send'></input>
            </form>
        </div>
    )
}