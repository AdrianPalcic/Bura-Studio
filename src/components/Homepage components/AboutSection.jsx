import React from 'react'
import "../../css/Homepage.css";
import { Link } from 'react-router-dom';


const AboutSection = () => {
    return (
        <div className="aboutsection">
            <div className="aboutsection-left">
                <h3>We specialize in designing and developing custom websites  that enhance your online presence.</h3>
                <br></br>
                <h3>Building fast and preforming sites tailored to your businesses needs</h3>
            </div>
            <div className="aboutsection-right">
                <Link to="/about" className='about-link'>Learn More <span>About us</span></Link>
            </div>

        </div>
    )
}

export default AboutSection