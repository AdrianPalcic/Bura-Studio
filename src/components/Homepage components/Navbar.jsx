import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">Logo</div>
            <div className="nav-links">
                <Link to="/work">Work</Link>
                <Link to="/about">About</Link>
                <Link to="/contact" className='contact-button'>Contact</Link>
            </div>
        </div>
    )
}

export default Navbar