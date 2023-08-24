import React, {useRef, useState} from "react";
// import emailjs from '@emailjs/browser';

export default function ContactForm(props) {
    const [formStatus, setFormStatus] = useState(false);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState({
        name: '',
        email: '',
        phonenum: '',
        message: '',
        file: ''
    })
    // const form = useRef();

    const FORM_ENDPOINT = process.env.REACT_APP_GETFORMS_ENDPOINT;

    function handleFileChange(event) {
            setQuery((prevState) => ({
                ...prevState,
                files: event.target.files[0]
            }));
    };

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setQuery((prevState) => ({
          ...prevState,
          [name]: value
        }));
      };

    function handleSubmit(event) {
        event.preventDefault();
        if(loading) return;
        setLoading(true);
        const formData = new FormData();
        Object.entries(query).forEach(([key, value]) => {
            formData.append(key, value);
        });

        // TODO: Uncomment when axios is installed
        // axios.post(
        //     FORM_ENDPOINT,
        //     formData,
        //     { headers: { Accept: "application/json"}}
        // ).then(function(response) {
        //     setFormStatus(true);
        //     setQuery({
        //         name: '',
        //         email: '',
        //         phonenum: '',
        //         message: ''
        //     });
        //     setLoading(false);
        // }).catch(function(error) {
        //     console.log(error);
        //     setLoading(false);
        // })
    };

    
    // EmailJS Option, only uncomment and add to onSubmit if needed
    // const sendEmail = (event) => {
    //     event.preventDefault();
    //     const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    //     const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    //     const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    //     emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
    //     .then((result) => {
    //         console.log(result.text);
    //     }, (error) => {
    //         console.log(error.text);
    //     });
    //     event.target.reset();
    //     alert('Form has been submitted!');
    // }

    return (
        <form className="helpform" encType="multipart/form-data" onSubmit={handleSubmit}>
            <input type='text' name='name' placeholder="Name" value={query.name} onChange={handleChange}/>
            <input type='text' name='email' placeholder="Email" value={query.email} onChange={handleChange} />
            <input type='text' name='phonenum' placeholder="Phone Number" value={query.phonenum} onChange={handleChange} />
            <textarea name='message' placeholder="Enter your message/description" value={query.message} onChange={handleChange} />
            <input id='uploadmedia' type='file' name='attachments' onChange={handleFileChange} />
            <button class='sendbutton' type='submit'>Send</button>
            {formStatus && <p>Form has been Submitted!</p>}
        </form>
    )

}