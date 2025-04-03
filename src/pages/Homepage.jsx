import React, { useEffect, useState } from 'react'
import HeroSection from '../components/Homepage components/HeroSection'
import Navbar from '../components/Navbar'
import AboutSection from '../components/Homepage components/AboutSection'
import ServicesSection from '../components/Homepage components/ServicesSection'
import PortfolioSection from '../components/Homepage components/PortfolioSection'
import Testimonials from '../components/Homepage components/Testimonials'
import ContactSmall from '../components/Homepage components/ContactSmall'
import Footer from '../components/Footer'
import Sidebar from '../components/sidebar'

const Homepage = () => {

    const [viewPortWidth, setViewPortWidth] = useState(window.innerWidth);
    
        useEffect(() =>{
            const handleResize = () =>{
                setViewPortWidth(window.innerWidth);
                console.log(viewPortWidth)
            }
    
            window.addEventListener('resize', handleResize);
    
            window.removeEventListener('resize', handleResize)
        }, [window.innerWidth])

    return (
        <div className="container">
            {
                viewPortWidth > 600 ? <Navbar /> : <Sidebar />
            }
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <PortfolioSection />
            <Testimonials />
            <ContactSmall />
            <Footer />
        </div>
    )
}

export default Homepage