import React from 'react'
import './Styles/login.css'

const login = ()=>{
    return( 
        <form className='login' action='/action_page.php'>
            <h1>Login</h1>
            <div id='login-inputs'>
                <div id='login-username'>
                    <i class="fa fa-user icon"></i>
                    <input type="text" id="emailuid-input" placeholder="Enter username or email" required/>
                </div>
                <div id='login-password'>
                    <i class="fa fa-key icon"></i>
                    <input type="password" id="login-password-input" placeholder="Enter password" required/>
                </div>
                <div id='additional-options'>
                    <div id='login-remind-me'>
                        <input type='checkbox' id='login-remind-me-input'/>
                        <label for='login-remind-me-input'>Remind me</label>
                    </div>
                    <a href='#' id='login-forget-password'><span>Forget password</span></a>
                </div>
            </div>
            <a><button id='login-btn'>Login</button></a>
            <div id='additional-login-links'>
                <p id='additional-signup-text'>Or sign up using</p>
                <a><p><strong>Google+</strong></p></a>
            </div>
        </form>
    )
}

export default login