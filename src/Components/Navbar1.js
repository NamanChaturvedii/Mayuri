import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./Navb.css"
import "../App.css"

const Navbar1 = () => {

    const[isMobile,setIsMobile] = useState(false);
    return (
        <div>
            <link rel="stylesheet" href="./Navb.css" />
        <nav className="navbar">
            <h3  className="logo">Mayuri Foods</h3>
            <ul  className={isMobile?"nav-links-mobile" : "nav-links" }
                onClick={()=>{setIsMobile(false)}}
            >
                <NavLink to='/' className="linksn">
                    <li>Home</li>
                </NavLink>
                <NavLink to='/tea' className="linksn">
                    <li>Tea$Coffee</li>
                </NavLink>
                <NavLink to='/chats' className="linksn">
                    <li>Chats</li>
                </NavLink>
                <NavLink to='/south' className="linksn">
                    <li>South Indian</li>
                </NavLink>
                <NavLink to='/momos' className="linksn">
                    <li>Momos</li>
                </NavLink>
                <NavLink to='/combos' className="linksn">
                    <li>Combos</li>
                </NavLink>
                <NavLink to='/mocktail' className="linksn">
                    <li>Mocktail</li>
                </NavLink>
                <NavLink to='/lassi' className="linksn">
                    <li>Lassi</li>
                </NavLink>
                <NavLink to='/sweet' className="linksn">
                    <li>Sweets</li>
                </NavLink>
                <NavLink to='/shake' className="linksn">
                    <li>Shakes</li>
                </NavLink>
                <NavLink to='/mrp' className="linksn">
                    <li>MRP Item</li>
                </NavLink>
                <NavLink to='/about' className="linksn">
                    <li>About Us</li>
                </NavLink>
            </ul>
            <button className="mobile-menu-icon" onClick={()=>setIsMobile(!isMobile)}>
            {isMobile ? <ion-icon name="close-outline"></ion-icon>  : <ion-icon name="menu-outline"></ion-icon> }
            </button>
        </nav>
        </div>
    )
}

export default Navbar1