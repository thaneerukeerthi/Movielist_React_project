import React, { useState, useEffect } from 'react';
import { FaHome } from "react-icons/fa";
import { useNavigate } from 'react-router';

const Sidebar = () => {
    const navigate = useNavigate();
    const userlogin = localStorage.getItem("userEmail");

    // State to store the movie data
    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        // Update movie data from local storage on component mount
        if(userlogin){
        const loggedUserMovies = JSON.parse(localStorage.getItem("userMovieData"));
        const userData = loggedUserMovies?.find((item) => item.userEmail === userlogin) || [];
        setMovieData(userData.movie || []);
        }
    }, [userlogin]);

    const handleHome = () => {
        navigate('/');
    };

    const handleRemove = (imdbID) => {
        if (userlogin) {
            const loggedUserMovies = JSON.parse(localStorage.getItem("userMovieData"));
            const userData = loggedUserMovies.find((item) => item.userEmail === userlogin) || [];
            const updatedMovies = userData.movie.filter(movie => movie.imdbID !== imdbID);

            // Update local storage
            const updatedUserMovies = loggedUserMovies.map(item =>
                item.userEmail === userlogin ? { ...item, movie: updatedMovies } : item
            );
            localStorage.setItem("userMovieData", JSON.stringify(updatedUserMovies));

            // Update state
            setMovieData(updatedMovies);
        }
    };
    return (
        <div className="sidebar">
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
            </div>
            <div className="home-btn" onClick={handleHome}>
                <FaHome size="22px" />Home
            </div>
            <hr className='horizontal-devider' />
            <div className="list-heading">
                My List
                <div className='movie-list'>
                    <ul style={{ padding: 0 }}>
                        {movieData.map((item) => (
                            <li key={item.imdbID} style={{ fontSize: '18px', color: 'grey', textAlign: 'left' }}>
                                {item.title} <span style={{ float:'right', cursor:'pointer' }} onClick={() => handleRemove(item.imdbID)}>✖︎</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;