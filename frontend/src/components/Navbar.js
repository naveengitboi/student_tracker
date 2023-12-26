import React from "react";
import { NavLink } from "react-router-dom";
import '../css/Navbar.css'
import { MdDashboard, MdOutlineSettings, MdEditNote, MdNotes, MdVerifiedUser, MdNotificationsActive, MdNote } from "react-icons/md"; 
import { TiAdjustBrightness, TiWeatherSunny } from "react-icons/ti";
function Navbar(){
    return(
        <>
            <nav className="navbar">
                <div className="navLinksContainerDesktop">
                    <ul className="navLinks">
                        <li><NavLink to='/'> <div className="navIcon"><MdDashboard /></div> Dashboard  </NavLink></li>
                        <li><NavLink to='/notification'>  <div className="navIcon"><MdNotificationsActive /></div> Notifications  </NavLink></li>
                        <li><NavLink to='/notes'> <div className="navIcon"><MdEditNote /></div>  Notes  </NavLink></li>
                        <li><NavLink to='/settings'>  <div className="navIcon"><MdOutlineSettings /></div> Settings  </NavLink></li>
                        <li><NavLink to='/mode'>  <div className="navIcon"><TiAdjustBrightness /></div>  Mode  </NavLink></li>
                    </ul>
                    <div className="navProfileDiv">
                        <NavLink to='/profile'>
                            <div className="profileImage"></div>
                            Profile
                        </NavLink>
                    </div>
                </div>
            </nav>
        </>
    )
}


export default Navbar