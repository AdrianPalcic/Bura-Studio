import React from 'react'
import { Link } from 'react-router-dom'

const PortfolioCard = () => {
    return (
        <Link to={"/work"}><img src="/placeholder.webp" className='portfolio-image' alt="Portfolio image" /></Link>
    )
}

export default PortfolioCard