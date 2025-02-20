import './CartPage.css'
import { useContext } from 'react';
import { SearchContext } from '../context/SearchContextProvider.jsx';
import {useNavigate } from "react-router-dom"; 
import { FaArrowLeft } from "react-icons/fa6";
import CartItem from '../components/CartItem.jsx'
function CartPage() {
  const {cart} = useContext(SearchContext);
  const navigate = useNavigate();
  return (
    <div className='cart-container'>
      <span className="back-arrow" onClick={()=>navigate(-1)}><FaArrowLeft size={25} /></span>
      {/* <Card/> */}
      {cart.map((item)=>(
        <CartItem key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default CartPage