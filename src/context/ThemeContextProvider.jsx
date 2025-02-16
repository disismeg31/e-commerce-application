/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import {createContext,useState,useEffect}from 'react';
export const  ThemeContext = createContext();
 

function ThemeContextProvider({children}) {
  const [theme, setTheme] = useState('light');

  const themeData = {
    themeName: theme,
    updateTheme: () => {
      setTheme(theme === 'dark' ? 'light': 'dark' )
    }
  };

  // useEffect(() => {
  //   // Apply the dark class directly on the body
  //   if (themeData.themeName === "dark") {
  //     document.body.classList.add("dark");
  //   } else {
  //     document.body.classList.remove("dark");
  //   }
  //   // document.body.className = themeData.themeName;
  // }, [themeData.themeName]);
  return (
    <ThemeContext.Provider value={themeData}>
        {children}
    </ThemeContext.Provider>
     
  )
}

export default ThemeContextProvider;

 