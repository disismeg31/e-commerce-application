import { useContext } from 'react';
import {NavLink} from 'react-router-dom';
import './Sidebar.css';
import { useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import {ThemeContext} from '../context/ThemeContextProvider'

function Sidebar() {
    const { themeName } = useContext(ThemeContext);
  
  const nav = useNavigate()
   const handleLogout =()=>{
    nav('/')
   }
  return (
    <div className={`sidebar-container ${themeName}`}>
        <NavLink to="/home" className="a">Dashboard</NavLink>
        <span className='logout' onClick={handleLogout}>Logout<MdLogout  size={20} /></span>
    </div>
    //         
    
  )
}

export default Sidebar