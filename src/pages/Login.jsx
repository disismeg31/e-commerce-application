import {useRef,useState} from 'react';
import { useNavigate } from "react-router-dom";
import Btn from '../components/Btn.jsx';
import './Login.css';
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import axios from 'axios';
import {Alert,Snackbar} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
function Login() {
    const [isVisible,setIsVisible] = useState(false);
    const [open, setOpen] = useState(false);
    const usernameInputElement = useRef();
    const passwordInputElement = useRef();
    const navigate = useNavigate();
    
    const handleLoginClick = () => {
        // const payload = {
        //     username:usernameInputElement.current.value,
        //     password:passwordInputElement.current.value
        // }
        // axios.post("https://dummyjson.com/auth/login",payload,
        //     {
        //         headers: { "Content-Type": "application/json" },
        //         withCredentials: true // Ensures cookies (if any) are included
        //     }
        // )
        //      .then((res)=>{
        //     sessionStorage.setItem("userData",JSON.stringify(res.data));
        //     sessionStorage.setItem("accessToken", res.data.accessToken);
        //     sessionStorage.setItem("Mytoken",res.data.token);
        //     navigate("/home");
        // })
        // .catch((error) => {
        //     console.error("Login error:", error);
        //     alert("Login failed. Please check your credentials.");
        // });
        if(usernameInputElement.current.value === "meg@123" && passwordInputElement.current.value === "123"){
            // navigate("/home"); // Navigate to the home page
            setOpen(true);
            setTimeout(() => { 
                navigate("/home"); // Navigate after showing the alert
            }, 1000); // 2-second delay
            console.log(usernameInputElement.current.value,passwordInputElement.current.value)
        }
        else{
            alert('incorrect username👤 & password🔑');
            usernameInputElement.current.value="";
            passwordInputElement.current.value="";
        }  
    };  
    return(
            <div className='main-container' >
            <div className="login-wrapper">
            <div className="head-btn">
            <h1 className='login-title'>LOGIN</h1>
            <input className='input-box' ref={usernameInputElement}  name='username'  autoComplete="off"  type="text" placeholder="username"   />
            <div className="psw">
            <input className='input-box psw-inp' ref={passwordInputElement} name='password'   type={isVisible ? "text" :"password"} placeholder="password"  />
            {isVisible?<span className='psw-icon' onClick={()=>setIsVisible((i)=>!i)}><FaRegEyeSlash/></span>:<span className='psw-icon' onClick={()=>setIsVisible((i)=>!i)}><FaRegEye/></span>}
            </div>
            <Btn label="Login" onClick={handleLoginClick}/>
            </div>
            <div className='forgot'>
            <span className='forgot-password' >forgot password?</span>
            </div>
            </div>  
            <Snackbar open={open} autoHideDuration={2000} onClose={() => setOpen(false)} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert icon={<CheckIcon fontSize="inherit" />}  severity="success">
                 Login successful.
                </Alert>
            </Snackbar> 
            
            </div>
    )
}

export default Login;
