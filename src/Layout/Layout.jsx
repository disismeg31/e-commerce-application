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
    width:"100%",
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
    backgroundColor:themeName ==='dark'? "#1E201E" :"#dfeed3",
    width:"180px",
    minHeight: "100vh",
    borderRight:themeName ==='dark' ? "solid 1px #333333" : "solid 1px rgba(51, 51, 51, 0.2)"
    // height:"100%"
  }

  const headerStyle={
    height:"100px",
    backgroundColor: themeName ==='dark'? "#333333" :"#5dd39e",
    display:"flex",
    alignItems:"center",
     
  }

  const outletStyle ={
    flex: 1,
    width:"100%",
    // display:"flex",
    // justifyContent:"center",
    // alignItems:"center",
    boxSizing: "border-box",
    // minHeight: "100vh",
    // padding:"40px"
  }

  return (
    <div style={containerSt}>
      <div style={headerStyle} ><Header/></div>
      {/* changed to fix the layout on click of product to align the content in center */}
      <div style={{display:"flex"}}>
      <aside style={sidebarStyle}><Sidebar/></aside>
      <div className={themeName} style={outletStyle} ><Outlet/></div>
      </div>
      <div style={footerStyle}><Footer/></div>
    </div>
  )
}

export default Layout