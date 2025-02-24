/* eslint-disable react/prop-types */
import SearchBar from './SearchBar';
import {NavLink} from 'react-router-dom';
import { useContext } from 'react';
import {ThemeContext} from '../context/ThemeContextProvider';
import { SearchContext } from "../context/SearchContextProvider";
import './Header.css'; 
import { IoIosCart } from "react-icons/io";
import { MdSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
function Header() {
  const {themeName,updateTheme} = useContext(ThemeContext)
  const {getTotalCartItem} = useContext(SearchContext)
  const inCart = getTotalCartItem();
  
  return (
    <div className={`header-container ${themeName}`}> 
        <SearchBar />
        <div className='icons-container'>
        <NavLink to='/home/cart' className='rounded-container-style'>
        <IoIosCart className='icon' size={25} />
        {
          inCart>0?
          <span className='cart-items-badge'>{inCart}</span>
          :
          null
        }
        </NavLink>
        <NavLink to='/home/profile' className='rounded-container-style'>
        <FaUserCircle  className='icon' size={25} />
        </NavLink>
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
        </div>  
    </div>
  )
}

export default Header