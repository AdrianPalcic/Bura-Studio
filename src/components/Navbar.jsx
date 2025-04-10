import React, { useEffect, useState } from 'react'
import { IoMenu } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Navbar = () => {



    return (
        <>
            <div className="navbar">
                <div className="nav-links">
                    <Link to="/work">Work</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/" className='logo'>B</Link>
                    <Link to="/about">About</Link>
                    <Link to="/blog">Blog</Link>
                </div>
            </div>

        </>
    )
}

export default Navbar   