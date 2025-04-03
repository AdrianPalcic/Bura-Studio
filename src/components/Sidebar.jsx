import { IoMenu } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
        <div className="sidebar-nav">
            <Link to="/" className="logo">B</Link>
            <IoMenu className='sidebar-menu' size={20} />
        </div>
    </div>
  )
}

export default Sidebar
