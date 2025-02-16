/* eslint-disable react/prop-types */
import { useContext } from 'react';
import {ThemeContext} from '../context/ThemeContextProvider'
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoIosCart } from "react-icons/io";
import {NavLink} from 'react-router-dom';
import './Card.css'

function Card({item,onDelete}) {
  const {themeName} = useContext(ThemeContext)
  return (
     <ul className={`card-container ${themeName}`}>
      <li><h2 className='heading'>{item.title}</h2></li>
      <img src={item.images} alt="chair" />
      <span><p className="price">{`$${item.price}`}</p></span>
      {/* <button onClick={()=>onDelete(item.id)} ><MdOutlineDeleteOutline size={25} /></button> */}
      <button>Add to <IoIosCart size={25} /></button>
      <NavLink className="product-details" to={`/home/product/${item.id}`} state={{item}} >View Details</NavLink>
     </ul>
  )
}

export default Card