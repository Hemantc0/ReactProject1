import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import heroImg from "./assets/hero.png";
import { NavLink, Outlet } from "react-router-dom";
import './App.css'  

function App() {
  const linkstyle=({isActive})=>({
    color: isActive?"red":"blue",
    display:"block",
    margin:"10px",
    textDecoration:"none",
    
  });
  return (
    <div>
      <nav>
        <NavLink to="/" style={linkstyle}>Home</NavLink>
        <NavLink to="/about" style={linkstyle}>About</NavLink>
        <NavLink to="/contact" style={linkstyle}>Contact</NavLink>
      </nav>
      <Outlet/>                    /*Render to the child route
      </div>
  )
}
export default App;
