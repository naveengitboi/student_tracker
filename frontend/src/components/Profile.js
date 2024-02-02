import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/Proflie.css'
function Profile() {
    return (
        <div className='page'>
            <p className='miniFont'>Profile Settings</p>
            <div className="profileSection">
                <p>naveengitboi</p>
                <p>change password</p>
                <p>naveengitboi@gmail.com</p>
                <p>Alter Attedance %</p>
                <NavLink to='eraseaccount'><p>Erase Account</p></NavLink>
            </div>
        </div>
    )
}

export default Profile