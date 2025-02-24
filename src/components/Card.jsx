/* eslint-disable react/prop-types */
import { useContext } from 'react';
import {ThemeContext} from '../context/ThemeContextProvider'
import { IoIosCart } from "react-icons/io";
import {NavLink} from 'react-router-dom';
import { SearchContext } from '../context/SearchContextProvider.jsx';
import './Card.css'

function Card({item}) {
  const {addToCart} = useContext(SearchContext);
  const {themeName} = useContext(ThemeContext)
  return (
     <ul className={`card-container ${themeName}`}>
      <div className="img-container">
      <img src={item.images} alt="product" />
      </div>
      <span><p className="price">{`$${item.price}`}</p></span>
      <li><h2 className='heading'>{item.title}</h2></li>
      <NavLink className="product-details" to={`/home/product/${item.id}`} state={{item}} >View Details</NavLink>
      <button className='card-button' onClick={()=>{addToCart(item.id)}}>Add to <IoIosCart size={25} /></button>
     </ul>
  )
}

export default Card