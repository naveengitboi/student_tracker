import React from 'react'
import '../css/DeleteAccount.css'
function DeleteAccount() {
    return (
        <div className='page'>
            <p className='miniFont'>Your Entire Data from our DB will be erase after this action</p>
            <div className="eraseContainer">
                <input type="password" placeholder='Enter your password' />
                <button className='clickButton dangerBtn'>Erase Account</button>
            </div>
        </div>
    )
}

export default DeleteAccount