import React, { useState } from 'react';
import { json, useNavigate } from 'react-router';
import Navbar from './Nav';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValidEmail) {
            navigate("/");
            localStorage.setItem("userEmail",email);
            if(savedUser){
                savedUser.push({
                    userEmail: email,
                    movie:[]
                })
                localStorage.setItem("userMovieData", JSON.stringify(savedUser));
            }
        else {
            const userMovieData=[{
                userEmail: email,
                    movie:[]
            }];
            localStorage.setItem("userMovieData", JSON.stringify(userMovieData));
        }
    }else{
        alert('Please enter a valid email address.');     
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
            <Navbar />
            <div className="signup-container">
                <div className="signup-title">Sign Up</div>
                <form className="signup-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email Address:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                    <button type="submit">Create Account</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
