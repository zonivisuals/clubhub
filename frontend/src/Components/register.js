import React, { useState } from 'react'
import './Styles/register.css'
import { Link } from 'react-router-dom'

const Register = ()=>{

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber:'',
        password: ''
    })

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };


    return(
        <form className='register' action='' onSubmit={handleSubmit}>

                <h1>Register</h1>
                <div id='register-inputs'>
                    <div id='user-names-id'>
                        <input name='firstName' onChange={handleInput} id='first-name-input' placeholder='First Name' type='text' required/>
                        <input name='lastName' onChange={handleInput} id='last-name-input' placeholder='Last Name' type='text' />
                    </div>
                    <input name='email' onChange={handleInput} id='user-email' placeholder='Email' type='email' required/>
                    <input name='password' onChange={handleInput} id='user-password' placeholder='Password' type='password' required/>
                    <input name='phoneNumber' onChange={handleInput} id='user-phone-number' placeholder='Phone Number' type='tel' required/>
                    <div id='register-additional-options'>
                        <input type='checkbox'/>
                        <label>I agree to terms and privacy policy</label>
                    </div>
                    
                </div>
                <a><button type='submit' id='register-btn'>Register</button></a>
                <div id='additional-login-links'>
                    <p id='additional-signup-text'>already have an account ?</p>
                    <Link to='/login'><p><strong>Sign in Now</strong></p></Link>
                </div>
        </form>
    )
}

export default Register