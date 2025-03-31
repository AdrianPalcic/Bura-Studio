import wave from '../../../public/wave-top.svg';
import "../../css/Homepage.css";
import ServicesCard from '../ServicesCard';
import { IoColorPaletteOutline } from "react-icons/io5";
import { CiMobile2 } from "react-icons/ci";
import { RiGlobalLine } from 'react-icons/ri';
import { FiMessageSquare } from 'react-icons/fi';
import { FaCode } from 'react-icons/fa';
import wave2 from "../../../public/portfolio-top-desktop.svg"



const ServicesSection = () => {

    const services = [
        {
            id: 1,
            title: "Web Design",
            description: "Beautiful, responsive websites that reflect your brand and engage your audience.",
            icon: <IoColorPaletteOutline size={30} />,
        },
        {
            id: 2,
            title: "Web Development",
            description: "Custom web applications and websites built with the latest technologies.",
            icon: <FaCode size={30} />,
        },
        {
            id: 3,
            title: "Mobile Responsive",
            description: "Websites that look and function perfectly on all devices and screen sizes.",
            icon: <CiMobile2 size={30} />,
        },
        {
            id: 4,
            title: "SEO Optimization",
            description: "Improve your search engine rankings and drive more organic traffic to your site.",
            icon: <RiGlobalLine size={30} />,
        },
        {
            id: 5,
            title: "Consultation",
            description: "Expert advice on improving your online presence and digital strategy.",
            icon: <FiMessageSquare size={30} />,
        },
    ]

    return (
        <div className="servicessection">
            <img src={wave} alt="wave" className='wave-services' />
            <div className="services">
                <h1>Our Services</h1>
                <h2>We offer a comprehensive range of web design and development services to help your business succeed online.</h2>
            </div>
            <div className="services-card-container">
                {services.map((service) => (
                    <ServicesCard
                        key={service.id}
                        title={service.title}
                        description={service.description}
                        icon={service.icon}
                    />
                ))}
            </div>
            <button className='btn btn-primary'>Get a free consultation</button>
            <img src={wave2} alt="wave" className='wave-portfolio-desktop' />

        </div>
    )
}

export default ServicesSection