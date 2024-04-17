import React from 'react';
import { useNavigate } from 'react-router';

const MovieCard = ({ imdbID, image, title, year}) => {
    const userLogin = localStorage.getItem("userEmail");
    const navigate = useNavigate()

    const handleList = () => {
        if (userLogin) {
            const existingData = localStorage.getItem("userMovieData");
            let userMovieData = existingData ? JSON.parse(existingData) : [];
            const loggedUserData = userMovieData.find(user => user.userEmail === userLogin);
    
            if (loggedUserData) {
                if (!loggedUserData.movie.some((item) => item.imdbID === imdbID)) {
                    loggedUserData.movie.push({
                        imdbID: imdbID,
                        title: title,
                        image: image,
                        year: year
                    });
                    localStorage.setItem("userMovieData", JSON.stringify(userMovieData));
                    alert('movie successfully added please refresh to see movies')
                } else {
                    alert('Movie already added');
                }
            } else {
                userMovieData.push({
                    userEmail: userLogin,
                    movie: [{
                        imdbID: imdbID,
                        title: title,
                        image: image,
                        year: year
                    }]
                });
                localStorage.setItem("userMovieData", JSON.stringify(userMovieData)); 
                navigate('/')
            }
        } else {
            navigate('/login');
        }
    };

    return (
        <div className="card" key={imdbID}>
            <div className="card-image">
                <img src={image} alt={title} />
                <span className="plus-icon" onClick={handleList} >+</span>
            </div>
            <div className="card-details">
                <div className="title">{title}</div>
                <div className="author">{year}</div>
            </div>
        </div>
    );
};

export default MovieCard;
