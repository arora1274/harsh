import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "./Login.css";


function Login() {
  const navigate = useNavigate();
    const [input,setInput] =useState({
        email:"",
        password:"",
    })

    const handleLogin=(e)=>{
      e.preventDefault();
      const loggeduser = JSON.parse(localStorage.getItem('user'))
      if(input.email === loggeduser.email && input.password=== loggeduser.password){
        localStorage.setItem("loggedin", true);
        navigate('/')
      }
      else{
        alert("Invalid Credentials")
      }
    }
  return (
    <div className= "login_page">
    <h1 className ='login_heading'>Login</h1>
        <form  className ="login_form" action="" onSubmit={handleLogin}>
            <div className ="login_email_div">
                <label className="login_email_label" htmlFor="email">Email</label>
                <input className="login_email_input" type="text" name="email" id="email" value ={input.email} onChange={(e)=> setInput({...input,[e.target.name]:e.target.value,})} />
            </div>
            <div className ="login_password_div">
                <label className="login_password_label" htmlFor="password">Password</label>
                <input className="login_password_input" type="text" name="password" id="password" value ={input.password} onChange={(e)=> setInput({...input,[e.target.name]:e.target.value,})} />
            </div>
            <button className ="login_password_btn" type="submit">Login</button>
            <p class="message">Not registered? <a href="/">Create an account</a></p>
        </form>
        
      
    </div>

   
  )
  
}

export default Login
