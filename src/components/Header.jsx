/* eslint-disable react/prop-types */
import SearchBar from './SearchBar';
import {NavLink} from 'react-router-dom';
import { useContext } from 'react';
import {ThemeContext} from '../context/ThemeContextProvider'
// import { useNavigate } from "react-router-dom";
import './Header.css';
// import { useNavigate } from "react-router-dom";
// import { MdLogout } from "react-icons/md";
import { IoIosCart } from "react-icons/io";
import { MdSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
function Header() {
  const {themeName,updateTheme} = useContext(ThemeContext)
  // const nav = useNavigate()
  //  const handleLogout =()=>{
  //   nav('/')
  //  }
  // const navigate = useNavigate();
  // const handleLoginClick = () => {
  //   navigate("/login"); // Navigate to the Login page
  // }; 
  return (
    <div className={`header-container ${themeName}`}> 
        <SearchBar />
        <div className='icons-container'>
        <NavLink to='/home/cart' className='rounded-container-style'><IoIosCart className='icon' size={25} /></NavLink>
        <NavLink to='/home/profile' className='rounded-container-style'><FaUserCircle  className='icon' size={25} /></NavLink>
        <span className='rounded-container-style' onClick={updateTheme} >
          {
            themeName ==='light'? 
              (
              <MdSunny className='icon' size={25} />
              )
               :
              (
              <IoMdMoon className='icon' size={25} />
              )   
          }
          </span>
        {/* <span className='icons' onClick={handleLogout}>Logout<MdLogout className='icon' size={20} /></span> */}
        </div>  
    </div>
  )
}

export default Header