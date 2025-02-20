// import {useContext,useEffect} from 'react';
import  ThemeContextProvider  from './context/ThemeContextProvider.jsx';
// import { ThemeContext } from './context/ThemeContextProvider';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import './App.css';
import SearchContextProvider from "./context/SearchContextProvider.jsx";
import Layout from './Layout/Layout.jsx';
import { Provider } from 'react-redux';
import productStore from "./store/index.js";
import CartPage from './pages/CartPage.jsx'
import ProductDeatailsPage from './pages/ProductDeatailsPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx';
function App() {
  return (
    <>
    <Provider store={productStore}>
    <ThemeContextProvider>
    <SearchContextProvider>
     <Router>
       
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Layout/>}>
              <Route  index element={<Home/>}/>
              <Route path="cart" element={<CartPage/>} />
              <Route path="profile" element={<ProfilePage/>} />
              <Route path="product/:id" element={<ProductDeatailsPage/>}/>
        </Route>
        <Route path="*" element={<Home/>} />
      </Routes>
       
    </Router>
    </SearchContextProvider>
    </ThemeContextProvider>
    </Provider>
    </>
         
  )
}

export default App
