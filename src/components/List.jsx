/* eslint-disable react/prop-types */
import {useContext, useState,useEffect} from 'react';
import axios from 'axios';
import Card from './Card.jsx'
import './List.css'
import { SearchContext } from '../context/SearchContextProvider.jsx';
import {useSelector,useDispatch} from 'react-redux';
import {setProductList,removeProduct} from '../store/actions/productActions.js'
import {ThemeContext} from '../context/ThemeContextProvider'

function List() {
  const {searchText} = useContext(SearchContext);
  const dispatch =useDispatch();
  const defaultList = useSelector(state=>state.products.products);
  const {themeName} = useContext(ThemeContext)
  // const [defaultList,setDefaultList] = useState([])
  // useEffect(()=>{
  //   const url = 'https://dummyjson.com/products';
  //   axios.get(url)
  //   // .then(res=>console.log(res.data))
  //   .then(res=>setDefaultList(res.data.products))
  //   .catch(error=>console.log(error))
  // },[])
  useEffect(()=>{
    const fetchProducts = async()=>{
      const url = 'https://dummyjson.com/products';
    try{
    const res = await axios.get(url)
    dispatch({ type: 'SET_PRODUCT_LIST', payload: res.data.products})
    }
    catch(error){
      console.log(error);
    }
    };
    fetchProducts();
  },[dispatch])
  // const [defaultList,setDefaultList] = useState([
  //   {
  //     id:1,
  //     name:'Mold',
  //     img:"https://joybird2.imgix.net/configurations/pid_657/-CF436-W03/657-CF436-W03-soto-chair-milo-dove-t1-2_t.png",
  //     price:9000,
  //   },
  //   {
  //     id:2,
  //     name:'Vector',
  //     img:"https://png.pngtree.com/png-vector/20240616/ourmid/pngtree-modern-chair-png-image_12736601.png",
  //     price:10000,
  //   },
  //   {
  //     id:3,
  //     name:'Holster',
  //     img:"https://d2bl4mvd8nzejc.cloudfront.net/img/p/2/0/0/200.jpg",
  //     price:8000,
  //   },
  //   {
  //     id:4,
  //     name:'Mold1',
  //     img:"https://joybird2.imgix.net/configurations/pid_6653/-CF437-W03/6653-CF437-W03-soto-concave-arm-chair-milo-french-blue-t1-2_t.png",
  //     price:9000,
  //   },
  //   {
  //     id:5,
  //     name:'Vector1',
  //     img:"https://www.chairup.com/media/catalog/product/cache/d96bafed0eaf2da7a78921bd99d8ba4f/u/n/untitled_design.webp",
  //     price:10000,
  //   },
  //   {
  //     id:6,
  //     name:'Holster1',
  //     img:"https://k4.ae/fitout/wp-content/uploads/2023/04/shop-bg-13.png",
  //     price:8000,
  //   }

  // ])
  

  // const handleDelete=(id)=>{
  //   const newList = defaultList.filter((item)=>(item.id !== id));
  //   setDefaultList(newList);
  // }
  const handleDelete=(id)=>{
     dispatch(removeProduct(id))
  }

  const filteredList = defaultList.filter((item)=>
    item?.title?.toLowerCase().includes(searchText.toLowerCase())
  );
 
  const displayList = searchText ? filteredList : defaultList;

  return (
    <div className={`list-container ${themeName}`}>
      {
        displayList.length>0 ? (
          displayList.map((item)=>(
            <Card key={item.id} item={item} onDelete={handleDelete}/>
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