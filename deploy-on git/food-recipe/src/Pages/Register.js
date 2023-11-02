import React from 'react'
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./Register.css";


function Register() {
    const navigate= useNavigate();
    const [input,setInput] =useState({
        name:"",
        email:"",
        password:"",
    })


    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(input)
        localStorage.setItem('user',JSON.stringify(input));
        navigate('/login');

    };
  return (
    <div className="register_page">
        <h1 className="register_heading">Register</h1>
        <form className="register_form" action="" onSubmit={handleSubmit}>
            <div>
                <label className="register_label_name" htmlFor="name">Name</label>
                <input className="register_name_input" type="text" name="name" id="name" value ={input.name} onChange={(e)=> setInput({...input,[e.target.name]:e.target.value,})} />
            </div>
            <div>
                <label  className="register_label_email" htmlFor="email">Email</label>
                <input className="register_email_input" type="text" name="email" id="email" value ={input.email} onChange={(e)=> setInput({...input,[e.target.name]:e.target.value,})} />
            </div>
            <div>
                <label  className="register_label_password" htmlFor="password">Password</label>
                <input className="register_password_input" type="text" name="password" id="password" value ={input.password} onChange={(e)=> setInput({...input,[e.target.name]:e.target.value,})} />
            </div>
            <button className="register_btn" type="submit">Submit</button>
        </form>
       
    </div>
  )
}

export default Register;
