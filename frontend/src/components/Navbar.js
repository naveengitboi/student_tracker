import React from "react";
import { NavLink } from "react-router-dom";
function Navbar(){
    return(
        <>
            <nav className="navbar">
                <div className="linksContianer">
                    <ul className="navLinks">
                        <NavLink  ></NavLink>
                    </ul>
                </div>
            </nav>
        </>
    )
}