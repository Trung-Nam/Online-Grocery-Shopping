import React from 'react'
import './Contact.scss'
import { FaMapLocationDot } from 'react-icons/fa6'
import { MdPhoneInTalk } from 'react-icons/md'
import { IoMdMail } from 'react-icons/io'

const Contact = () => {
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
            </div>
        </div>
    )
}

export default Contact