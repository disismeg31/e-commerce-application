import { Outlet,useNavigate } from "react-router-dom"
import { useEffect,useContext } from "react";
import Header from "../components/Header.jsx" 
import Footer from "../components/Footer.jsx"
import Sidebar from "../components/Sidebar.jsx";
import { ThemeContext } from "../context/ThemeContextProvider";
function Layout() {
  const navigate = useNavigate();
  const { themeName } = useContext(ThemeContext);
  useEffect(() => {
    // If no user is logged in, redirect to login
    const isLoggedIn = true;  
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    document.body.className = themeName;
  }, [themeName]);

  const containerSt = {
    display:"flex",
    // justifyContent:"space-between",
    flexDirection:"column",
    flexWrap:"wrap",
    width:"100vw",
    height:"100%"
  }
  const footerStyle ={
    backgroundColor:"#adf16e",
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%"
  }
  const sidebarStyle={
    backgroundColor:themeName ==='dark'? "#555555" :"#adf16e",
    width:"180px",
    // height:"100vh"
  }

  const headerStyle={
    height:"100px",
    backgroundColor: themeName ==='dark'? "#333333" :"#5dd39e",
  }

  const outletStyle ={
    // minHeight: "100vh",
    // backgroundColor: themeName ==='dark'? "#1E201E" :"#dfeed3",
  }

  return (
    <div style={containerSt}>
      <div style={headerStyle} ><Header/></div>
      <div style={{display:"flex"}}>
      <aside style={sidebarStyle}><Sidebar/></aside>
      <div className={themeName}  ><Outlet/></div>
      </div>
      <div style={footerStyle}><Footer/></div>
    </div>
  )
}

export default Layout