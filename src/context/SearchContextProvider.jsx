/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {createContext,useState}from 'react';
import {useSelector} from 'react-redux';


export const SearchContext = createContext();

function SearchContextProvider({children}) {
    const [searchText, setSearchText] = useState("");
    const [cart,setCart]=useState([]);

    const List = useSelector(state=>state.products.products);
    const addToCart = (id) =>{
      const itemToAdd = List.filter((item)=>(item.id === id))
      console.log(itemToAdd)
      setCart([...cart,itemToAdd])
    }

    const deleteFromCart = (id)=>{
      const newCartList = List.filter((item)=>(
         item.id!==id
      ));
      setCart(newCartList)
    }
    const data = {
        searchText,
        setSearchText,
        cart,
        addToCart,
        deleteFromCart
    }
  return (
     <SearchContext.Provider value={data}>
        {children}
     </SearchContext.Provider>
  )
}


export default SearchContextProvider ;