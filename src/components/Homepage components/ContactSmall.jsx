import React from 'react'
import { BsTelephone } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'

const ContactSmall = () => {
    return (
        <div className="contact-small">
            <h1>Contact Us</h1>
            <h2>Ready to start your next project? Contact us today to discuss how we can help bring your vision to life.</h2>
            <div className="contact-small-container">
                <a href='mailto:adrian.palcic@gmail.com'><MdOutlineEmail size={30} className='testimonial-icon' /> adrian.palcic@gmail.com</a>
                <a href='telto:+385957582199'><BsTelephone size={30} className='testimonial-icon' /> 095 748 2199</a>
            </div>
        </div>
    )
}

export default ContactSmall