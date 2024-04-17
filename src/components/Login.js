import React, { useState } from 'react';
import Navbar from './Nav';
import { useNavigate } from 'react-router';

const Login = () => {
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem("userMovieData"));

    const handleSubmit = (e) => {
        e.preventDefault();
        const savedUser = userData?.map((item) => item.userEmail).includes(email) || false;
        if (isValidEmail && savedUser) {
            navigate('/');
            localStorage.setItem("userEmail", email);
        } else if (!isValidEmail) {
            alert('Please enter a valid email address.');
        } else {
            alert('Email address not found. Please sign up first.');
        }
    };

    const handleEmailChange = (e) => {
        const inputEmail = e.target.value;
        setEmail(inputEmail);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValidEmail(emailRegex.test(inputEmail));
    };

    return (
        <div>
            <Navbar/>
            <div className="signup-container">
                <div className="signup-title">Login</div>
                <form className="signup-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email Address:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
