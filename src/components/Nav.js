import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const userLogin = localStorage.getItem("userEmail");

    const handleLogout = () => {
        localStorage.removeItem("userEmail");
        setIsDropdownOpen(false);
    }

    return (
        <header>
            <div className='header' >
                Watchlists
            </div>
            {userLogin ?
                <div className="logout">
                    <FaRegUserCircle size="25px" />
                    <span>{userLogin}</span>
                    <FaCaretDown size="15px" className="drop-down" onClick={() => setIsDropdownOpen(!isDropdownOpen)} />
                    {isDropdownOpen && (
                        <div style={{ position: 'absolute', right: '60px', top: '5%', zIndex: '1', backgroundColor: '#ddd', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)', padding: '5px 10px', borderRadius: '5px' }}>
                            <span style={{ cursor: 'pointer' }} onClick={handleLogout}>Logout</span>
                        </div>
                    )}
                </div> :
                <div>
                    <Link to={"/login"}>Login</Link>/
                    <Link to={"/signup"}>Signup</Link>
                </div>
            }
        </header>
    )
}

export default Navbar;