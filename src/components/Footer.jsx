import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer">
            <Link to={"/"} className='logo'>B</Link>
            <h3>A Web development business</h3>
            <div className="footer-links">
                <Link to="/work">Work</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
                <Link to="/blog">Blog</Link>
            </div>
            <div className="social-links">
            <Link to="www.instagram.com"><FaInstagram /></Link>
            <Link to="www.facebook.com"><FaFacebook /></Link>

            </div>
        </div>
    )
}

export default Footer