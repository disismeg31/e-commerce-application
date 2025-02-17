/* eslint-disable react/prop-types */
import { useContext } from 'react';
import {ThemeContext} from '../context/ThemeContextProvider'
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoIosCart } from "react-icons/io";
import {NavLink} from 'react-router-dom';
import { SearchContext } from '../context/SearchContextProvider.jsx';
import './Card.css'

function Card({item,onDelete}) {
  const {addToCart} = useContext(SearchContext);
  const {themeName} = useContext(ThemeContext)
  return (
     <ul className={`card-container ${themeName}`}>
      <img src={item.images} alt="product" />
      <span><p className="price">{`$${item.price}`}</p></span>
      <li><h2 className='heading'>{item.title}</h2></li>
      {/* <button onClick={()=>onDelete(item.id)} ><MdOutlineDeleteOutline size={25} /></button> */}
      <NavLink className="product-details" to={`/home/product/${item.id}`} state={{item}} >View Details</NavLink>
      <button onClick={()=>{addToCart(item.id)}}>Add to <IoIosCart size={25} /></button>
     </ul>
  )
}

export default Card