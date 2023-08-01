import React from 'react';

function ContactForm ({ handleSubmit }){
    return (
        <form className="needs-validation" noValidate onSubmit={handleSubmit} method="POST">
            <div className="row g-4">
                <div className="col-sm-6">
                    <label htmlFor="fn" className="form-label fs-base">Full name</label>
                    <input type="text" className="form-control form-control-lg" name="fullName" required />
                    <div className="invalid-feedback">Please enter your full name!</div>
                </div>
                <div className="col-sm-6">
                    <label htmlFor="email" className="form-label fs-base">Email</label>
                    <input type="email" className="form-control form-control-lg" name="email" required />
                    <div className="invalid-feedback">Please provide a valid email address!</div>
                </div>
                <div className="col-12 pb-2">
                    <label htmlFor="message" className="form-label fs-base">Message</label>
                    <textarea className="form-control form-control-lg" name="message" rows="3" required></textarea>
                    <div className="invalid-feedback">Please provide a valid message!</div>
                </div>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-lg btn-primary w-100 w-sm-auto">Contact Us</button>
            </div>
        </form>
    );
};

export default ContactForm;
