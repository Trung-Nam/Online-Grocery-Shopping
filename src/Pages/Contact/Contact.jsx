import React, { useState } from 'react'
import './Contact.scss'
import { FaMapLocationDot } from 'react-icons/fa6'
import { MdPhoneInTalk } from 'react-icons/md'
import { IoMdMail } from 'react-icons/io'

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g., send form data to API)
        console.log(formData);
    };

    return (
        <div className="contact__wrapper">
            <div className="container">
                <div className="contact__wrapper-info">
                    <div className="contact__wrapper-info-header">
                        <h1>Get In Touch</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita quaerat unde quam dolor culpa veritatis inventore, aut commodi eum veniam vel.</p>
                    </div>

                    <div className="contact__wrapper-info-content row justify-content-center">
                        <div className="col-md-4">
                            <div className="item-content text-center">
                                <FaMapLocationDot />
                                <h6>102 Street 2714 Donovan</h6>
                                <p className="text-muted">Lorem ipsum dolor sit amet discont</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="item-content text-center">
                                <MdPhoneInTalk />
                                <h6>+02 1234 567 88</h6>
                                <p className="text-muted">Lorem ipsum dolor sit amet discont</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="item-content text-center">
                                <IoMdMail />
                                <h6>info@example.com</h6>
                                <p className="text-muted">Lorem ipsum dolor sit amet discont</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="contact-form-wrapper">
                    <div className="contact__form">
                        <div className="contact__form-header">
                            <h2>Send Us</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita quaerat unde quam dolor culpa veritatis inventore, aut commodi eum veniam vel.</p>
                        </div>

                        <div className="contact__form-content mt-5">
                            <form onSubmit={handleSubmit}>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label htmlFor="name" className="form-label">Your name *</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            placeholder="Enter your name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="email" className="form-label">Your email *</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="subject" className="form-label">Subject *</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="subject"
                                        name="subject"
                                        placeholder="Enter the subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Your message</label>
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        name="message"
                                        rows="6"
                                        placeholder="Enter your message"
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn custom-btn" >Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact