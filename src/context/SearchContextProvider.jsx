/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {createContext,useState}from 'react';



export const SearchContext = createContext();

function SearchContextProvider({children}) {
    const [searchText, setSearchText] = useState("");
    const data = {
        searchText,
        setSearchText
    }
  return (
     <SearchContext.Provider value={data}>
        {children}
     </SearchContext.Provider>
  )
}


export default SearchContextProvider ;