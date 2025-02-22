import { Outlet,useNavigate } from "react-router-dom"
import { useState,useEffect,useContext } from "react";
import Header from "../components/Header.jsx" 
import Footer from "../components/Footer.jsx"
import Sidebar from "../components/Sidebar.jsx";
import { ThemeContext } from "../context/ThemeContextProvider";
// import { GiHamburgerMenu } from "react-icons/gi";
function Layout() {
  const navigate = useNavigate();
  const { themeName } = useContext(ThemeContext);
  // const [isSidebarOpen, setSidebarOpen] = useState(false); // Sidebar state
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(window.innerWidth <= 768);

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

  useEffect(() => {
    const handleResize = () => {
      setSidebarCollapsed(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // const toggleSidebar = () => {
  //   setSidebarOpen(!isSidebarOpen);
  // };
  const containerSt = {
    display:"flex",
    flexDirection:"column",
    flexWrap:"wrap",
    width:"100%",
    minHeight:"100vh",
    padding: "100px 0px",
  }
  const headerStyle={
    height:"100px",
    backgroundColor: themeName ==='dark'? "#333333" :"#5dd39e",
    display:"flex",
    alignItems:"center",
    top:0,
    right:0,
    width:"100%",
    position:"fixed" 
  }
  const footerStyle ={
    backgroundColor:"#adf16e",
    left: 0,
    bottom: 0,
    width: "100%",
    height:"50px",
    position:"fixed"
  }
  const sidebarStyle={
    backgroundColor:themeName ==='dark'? "#1E201E" :"#dfeed3",
    // width:"180px",
    // width: isSidebarOpen ? "180px" : "70px", // Shrinks on small screens
    // overflow: "hidden", // Hide content when closed
    width: isSidebarCollapsed ? "70px" : "180px", // Shrink sidebar on small screens
    minHeight: "100vh",
    borderRight:themeName ==='dark' 
    ? "solid 1px #333333"
    : "solid 1px rgba(51, 51, 51, 0.2)",
  }

  const outletStyle ={
    flex: 1,
    width:"100%",
    display:"flex",
    flexDirection:"column",
    boxSizing: "border-box",
    overflowY: "auto",  /* Enables vertical scrolling */
    maxHeight: "calc(100vh - 150px)",
    // marginLeft: isSidebarOpen ? "0px" : "0px", // Adjust content width
    marginLeft: "0px",
  }

  const sideNdout = {
    display:"flex"
  }

  const outlinendfooter = {
    display:'flex',
    flexDirection:"column",
    flex: 1,
  }

  return (
    <div style={containerSt}>
      <div style={headerStyle}>
        {/* <div><GiHamburgerMenu
         onClick={toggleSidebar}
         style={{
          //  display: "none",  // Initially hidden
           display: window.innerWidth <= 768 ? "block" : "none", // Show on small screens
           cursor: "pointer",
           fontSize: "30px",  // Adjust size
           color: themeName === "dark" ? "#fff" : "#333", // Change color based on theme
         }}
        /></div> */}
        <Header/>
        </div>
      <div style={sideNdout}>
      <aside style={sidebarStyle}><Sidebar isSidebarCollapsed={isSidebarCollapsed}/></aside>
      <div style={outlinendfooter}>
      <div className={themeName} style={outletStyle} ><Outlet/></div>
      <div style={footerStyle}><Footer/></div>
      </div>
      </div>
    </div>
  )
}

export default Layout