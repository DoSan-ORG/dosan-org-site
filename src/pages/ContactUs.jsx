import React, { useState } from 'react';
import contactBgImage from '../assets/images/contacts/bg.svg';
import ContactForm from "../components/UI/ContactForm";
import ContactModal from "../components/UI/ContactModal";


function ContactUsPage() {
    const [open, setOpen] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        form.reportValidity();
        if (form.checkValidity()) {
            handleSubmit(event);
        }
    };

    const handleCloseModal = () => {
        setOpen(false);
    };

    return (
        <div>
            <section className="bg-size-cover bg-position-bottom-center bg-repeat-0 py-5"
                style={{ backgroundImage: `url(${contactBgImage})` }}>
                <div className="container pt-5 pb-lg-4 pb-xl-5">
                    <nav className="pt-lg-4" aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item">
                                <a href="/home"><i className="bx bx-home-alt fs-lg me-1"></i>Home</a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">Contacts</li>
                        </ol>
                    </nav>

                    <div className="row pt-md-2 pt-lg-5 pb-2 pb-md-4">
                        <div className="col-xxl-4 col-xl-5 col-lg-6 pt-3 mt-3">
                            <h1 className="h3 mb-2">Want to work with us?</h1>
                            <h2 className="display-1 text-gradient-primary pb-sm-2 pb-md-3 mb-3">Let's talk!</h2>
                            <div className="nav d-block lead pt-lg-5">
                            </div>
                        </div>
                        <div className="col-lg-6 offset-xl-1 offset-xxl-2 pt-3 pt-md-4 pt-lg-3 mt-3">
                            <ContactForm handleSubmit={handleSubmit} />
                        </div>
                    </div>
                </div>
            </section>
            <ContactModal open={open} handleCloseModal={handleCloseModal} />
        </div>
    );
};

export default ContactUsPage;
