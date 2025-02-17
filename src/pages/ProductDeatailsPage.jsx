import {useEffect} from 'react';
import { useLocation,useNavigate } from "react-router-dom"; 
import { FaStar } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import './ProductDeatailsPage.css'
function ProductDeatailsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state?.item;//retrieve the item object
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if(!item){
    return <p>Item not found</p>;
  }
  return (
    <div className="product-details-container">
      <span className="back-arrow" onClick={()=>navigate(-1)}><FaArrowLeft size={25} /></span>
      <div className="product-heading">
        <h1>Product details</h1>
        <h3>{item.title}</h3>
        <h3>{item.brand}</h3>
        <img className="image" src={item.images} alt="item image" />
      </div>
      <div className="details">
        <span>
        {
          item.rating <=5 && 
          Array.from({ length: item.rating }).map((_, index) => (
            <FaStar size={20} className="star-color" key={index} />
          ))
        }
        </span>
        <p className="desc" >{item.description}</p>
        <div className="tags-avail">
        {item.tags?.map((tag, index) => (
          <span key={index} className="badge">{tag}</span>
        ))}
        </div>
        <span className="stock" >{item.stock}Left - {item.availabilityStatus}</span>
        <button>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductDeatailsPage