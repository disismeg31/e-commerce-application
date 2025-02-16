import {useRef} from 'react';
import { useNavigate } from "react-router-dom";
import Btn from '../components/Btn.jsx';
import './Login.css'
function Login() {
    const usernameInputElement = useRef();
    const passwordInputElement = useRef();
    const navigate = useNavigate();
    const handleLoginClick = () => {
        if(usernameInputElement.current.value === "meg@123" && passwordInputElement.current.value === "123"){
            navigate("/home"); // Navigate to the home page
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
            <input className='input-box' ref={usernameInputElement}  name='username'   type="text" placeholder="username"   />
            <input className='input-box' ref={passwordInputElement} name='password'   type="password" placeholder="password"  />
            <Btn label="Login" onClick={handleLoginClick}/>
            </div>  
            </div>
    )
}

export default Login;
