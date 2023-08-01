import React, { useRef, useState } from 'react';

function ContactForm(props){
    const [isFullnameError, setIsFullnameError] = useState(false);
    const [isEmailError, setIsEmailError] = useState(false);
    const [isMessageError, setIsMessageError] = useState(false);

    const fullNameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        let hasError = false;

        if(fullNameRef.current.value.trim().length <= 0){
            setIsFullnameError(true);
            hasError = true;
        }else{
            setIsFullnameError(false);
        }

        if(emailRef.current.value.trim().length <= 0){
            setIsEmailError(true);
            hasError = true;
        }else{
            setIsEmailError(false);
        }

        if(messageRef.current.value.trim().length <= 0){
            setIsMessageError(true);
            hasError = true;
        }else{
            setIsMessageError(false);
        }

        if(hasError){
            return;
        }

        if (form.checkValidity()) {
            props.onShowModal();
        }
    };

    return (
        <form className="needs-validation" noValidate onSubmit={handleSubmit} method="POST">
            <div className="row g-4">
                <div className="col-sm-6">
                    <label htmlFor="fn" className="form-label fs-base">Full name</label>
                    <input type="text" className="form-control form-control-lg" name="fullName" ref={fullNameRef} />
                    { isFullnameError && <p className="error-label">Please enter your full name!</p> }
                </div>
                <div className="col-sm-6">
                    <label htmlFor="email" className="form-label fs-base">Email</label>
                    <input type="email" className="form-control form-control-lg" name="email" ref={emailRef} />
                    { isEmailError && <p className="error-label">Please provide a valid email address!</p> }
                </div>
                <div className="col-12 pb-2">
                    <label htmlFor="message" className="form-label fs-base">Message</label>
                    <textarea className="form-control form-control-lg" name="message" rows="3" ref={messageRef}></textarea>
                    { isMessageError && <p className="error-label">Please provide a valid message!</p> }
                </div>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-lg btn-primary w-100 w-sm-auto">Contact Us</button>
            </div>
        </form>
    );
};

export default ContactForm;
