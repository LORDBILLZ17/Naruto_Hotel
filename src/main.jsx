import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbro from './Navbro';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Footer from './Footer';
import { AuthProvider } from "./AuthContext";



ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  
    <Navbro />
    <AuthProvider>
    <App />
    </AuthProvider>
    <Footer />
  </BrowserRouter>
);
