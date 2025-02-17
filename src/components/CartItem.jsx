/* eslint-disable react/prop-types */
import {useContext} from 'react'
import { SearchContext } from '../context/SearchContextProvider.jsx';
import { MdOutlineDeleteOutline } from "react-icons/md";
import './CartItem.css'

function CartItem({item}) {
  const {deleteFromCart} = useContext(SearchContext);

  return (
    <div className='cart-item-container'>
      <img src={item.images} alt="product" />
      <span><p className="price">{`$${item.price}`}</p></span>
      <li><h2 className='prod-heading'>{item.title}</h2></li>
      <button onClick={()=>deleteFromCart(item.id)} ><MdOutlineDeleteOutline size={25} /></button>
    </div>
  )
}

export default CartItem