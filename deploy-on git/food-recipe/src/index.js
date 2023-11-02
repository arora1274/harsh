import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Navbar from "./components/Navbar";
import RecipeInfo from './components/RecipeInfo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Navbar />
    
    <Routes>
            <Route path ="/" element={<App />} />
            <Route path ="register" element={<Register />} />
            <Route path ="login" element={<Login />} />
            <Route path="/recipeinfo/:recipeId" element={<RecipeInfo />} />
      
   

    </Routes>
  </BrowserRouter>

 
);


