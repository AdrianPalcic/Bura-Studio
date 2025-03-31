import React from 'react'
import { IoColorPaletteOutline } from "react-icons/io5";

const ServicesCard = ({ icon, title, description }) => {
    return (
        <div className="services-card">
            <div className="icon">{icon}</div>
            <div className="title"> {title} </div>
            <div className="description">{description}</div>
        </div>
    )
}

export default ServicesCard