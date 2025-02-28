/* eslint-disable react/prop-types */
import {useContext,useEffect} from 'react';
import Card from './Card.jsx'
import './List.css'
import { SearchContext } from '../context/SearchContextProvider.jsx';
import {useSelector,useDispatch} from 'react-redux';
import {setProductList} from '../store/actions/productActions.js'
import {ThemeContext} from '../context/ThemeContextProvider';
import { fetchProducts } from '../services/apiService.js';

function List() {
  const {searchText} = useContext(SearchContext);
  const dispatch =useDispatch();
  const defaultList = useSelector(state=>state.products.products);
  const {themeName} = useContext(ThemeContext)
  useEffect(()=>{
    const getProducts = async()=>{
    try{
    const products = await fetchProducts();
    dispatch(setProductList(products))
     }
    catch(error){
      console.log("Failed to fetch products:",error);   
    }
    };
    getProducts();
  },[dispatch])

  // useEffect(()=>{
  //   const listContainer = document.querySelector(".list-container");

  //   if (listContainer && listContainer.children.length <= 5) {
  //     listContainer.style.justifyContent = "flex-start";
  //   } else {
  //     listContainer.style.justifyContent = "space-evenly"; // Reset for multiple items
  //   }
  // },[searchText])
   
  

  const filteredList = defaultList.filter((item)=>
    item?.title?.toLowerCase().includes(searchText.toLowerCase())
  );
 
  const displayList = searchText ? filteredList : defaultList;

  return (
    <div className={`list-container ${themeName}`}>
      {
        displayList.length>0 ? (
          displayList.map((item)=>(
            <Card key={item.id} item={item}/>
           )
        ))  
      :
      (
          <p style={{height:"100vh"}}>No products</p>
      )
    
      }
    </div>
  )
}

export default List