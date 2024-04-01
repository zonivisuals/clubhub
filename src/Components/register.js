import React from 'react'
import './Styles/register.css'

const register = ()=>{
    return(
        <form className='register' action='actions.php'>

                <h1>Register</h1>
                <div id='register-inputs'>
                    <div id='user-names-id'>
                        <input id='first-name-input' placeholder='First Name' type='text' required/>
                        <input id='last-name-input' placeholder='Last Name' type='text' />
                    </div>
                    <input id='user-email' placeholder='Email' type='email' required/>
                    <input id='user-password' placeholder='Password' type='password' required/>
                    <input id='user-confirm-password' placeholder='Confirm Password' type='password' required/>
                    <input id='user-phone-number' placeholder='Phone Number' type='tel' required/>
                    <div id='register-additional-options'>
                        <input type='checkbox'/>
                        <label>I agree to terms and privacy policy</label>
                    </div>
                </div>
                <a><button id='register-btn'>Register</button></a>
        </form>
    )
}

export default register