// import {useContext,useEffect} from 'react';
import  ThemeContextProvider  from './context/ThemeContextProvider.jsx';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/customer/Home.jsx';
import Login from './pages/customer/Login.jsx';
import './App.css';
import SearchContextProvider from "./context/SearchContextProvider.jsx";
import Layout from './Layout/Layout.jsx';
import { Provider } from 'react-redux';
import productStore from "./store/index.js";
import CartPage from './pages/customer/CartPage.jsx'
import ProductDeatailsPage from './pages/customer/ProductDeatailsPage.jsx'
import ProfilePage from './pages/customer/ProfilePage.jsx';
// import OrderPlaced from './pages/customer/OrderPlaced.jsx';
import ProtectedRoutes from './services/ProtectedRoutes.jsx';
// import { ErrorBoundary } from 'react-error-boundary';
import {lazy,Suspense} from 'react';
const OrderPlaced = lazy(()=> import('./pages/customer/OrderPlaced.jsx'))
// so we have to learn about suspence and error boundaries and skeltons so i paused this
function App() {
  return (
    <>
    <Provider store={productStore}>
    <ThemeContextProvider>
    <SearchContextProvider>
     <Router>
       
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoutes/>}>
        <Route path="/home" element={<Layout/>}>
              <Route  index element={<Home/>}/>
              <Route path="cart" element={<CartPage/>} />
              <Route path="profile" element={<ProfilePage/>} />
              <Route path="product/:id" element={<ProductDeatailsPage/>}/>
        </Route>
        <Route path="/checkoutorderplaced" element={
          <Suspense fallback='Loading....'>
          <OrderPlaced/>
          </Suspense>
          } 
        />
        {/* <Route path="/checkoutorderplaced" element={<OrderPlaced/>}/> */}
        <Route path="*/*" element={<Home/>} />
        </Route>
      </Routes>
      
    </Router>
    </SearchContextProvider>
    </ThemeContextProvider>
    </Provider>
    </>
         
  )
}

export default App
