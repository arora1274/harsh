import React from 'react';
import { useNavigate } from 'react-router-dom';

const Alert = () => {
    const navigate = useNavigate();
    const userName = JSON.parse(localStorage.getItem("user"));
    
    const handleLogout=()=>{
        localStorage.removeItem('loggedin');
        navigate("/login")

    }
    
  return (
    <div>
        <h2>Homepage</h2>
        <p>Welcome {`userName`}</p>
        <button type='button' onClick= {handleLogout}>Logout</button>
      
    </div>
    
  );
}

export default Alert;

