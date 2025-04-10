import { useState } from 'react';
import { BsTelephone } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import { IoMenu } from 'react-icons/io5'
import { MdOutlineEmail } from 'react-icons/md';
import { Link } from 'react-router-dom'

const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log(!isOpen)
  }

  return (
    <>
      <div className="sidebar-nav">
        <Link to="/" className="logo">B</Link>
        <IoMenu className='sidebar-menu' size={25} onClick={handleClick} />
      </div>
      <div className={!isOpen ? "sidebar-full" : "sidebar-full opened"}>
        <div className="head">
          <IoMdClose className='sidebar-menu' size={25} onClick={handleClick} />
        </div>
        <div className="title">
          <h1>Bura Studio</h1>
        </div>
        <div className="underline"></div>
        <div className="menu">
          <Link to="/about" className="menu-item">About</Link>
          <Link to="/contact" className="menu-item">Contact</Link>
          <Link to="/work" className="menu-item">Work</Link>
          <Link to="/blog" className="menu-item">Blog</Link>
        </div>
        <div className="underline2"></div>
        <div className="contact">
          <h1>Give us a call</h1>
          <a href="mailto:adrian.palcic@gmail.com"><MdOutlineEmail /> adrian.palcic@gmail.com</a>
          <a href="mailto:0957482199"> <BsTelephone /> 0957482199</a>
        </div>
      </div>
    </>
  )
}

export default Sidebar;
