import React, { useState } from 'react'
import './Styles/login.css'
import { Link } from 'react-router-dom'
import validation from './loginValidation'

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
    };

    return (
        <form className='login' action="" onSubmit={handleSubmit}>
            <h1>Sign in</h1>
            <div id='login-inputs'>
                <div id='login-username'>
                    <i className="fa fa-user icon"></i>
                    <input onChange={handleInput} name='email' type="text" id="emailuid-input" placeholder="Enter email" required/>
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                </div>
                <div id='login-password'>
                    <i className="fa fa-key icon"></i>
                    <input onChange={handleInput} name='password' type="password" id="login-password-input" placeholder="Enter password" required/>
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>
                <div id='additional-options'>
                    <div id='login-remind-me'>
                        <input type='checkbox' id='login-remind-me-input'/>
                        <label htmlFor='login-remind-me-input'>Remind me</label>
                    </div>
                    <a href='#' id='login-forget-password'><span>Forget password</span></a>
                </div>
            </div>
            <a><button type='submit' id='login-btn'>Login</button></a>
            <div id='additional-login-links'>
                <p id='additional-signup-text'>don't have an account ?</p>
                <Link to='/Register'><p><strong>Sign up Now</strong></p></Link>
            </div>
        </form>
    )
};

export default Login;
