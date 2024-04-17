import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

const Home = () => {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('Batman');

    const fetchData = async (searchQuery) => {
        try {
            const url = `https://www.omdbapi.com/?s=${searchQuery}&page=1&apikey=50c41423`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setData(data.Search)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData(searchQuery)
    }, [])

    const handleSearch = () => {
        const searchValue = document.getElementById('searchInput').value;
        setSearchQuery(searchValue);
        if (searchValue.trim() !== '') {
            fetchData(searchValue);
        } else {
            console.log('Please enter a search query');
        }
    };

    const handleSearchInput = (e) => {
        if (e.target.value == '') {
            setSearchQuery('batman')
            fetchData('batman')
        }
    }

    return (
        <div className="main-content">
            <div className="info-box" >
            <h2 style={{ textAlign: 'center' }}>
                    Welcome to <span style={{ color: "tomato" }}>FilmFusion</span>
                </h2>
                <p>Just click + to add and refresh the page....</p>
            </div>
            <div className="search-container">
                <input type="text" placeholder="Search..." className="search-input" id="searchInput" onChange={handleSearchInput} />
                <button className="search-button" onClick={handleSearch}>Search</button>
            </div>
            <div className="card-container">
                {data.length > 0 ? data.map(item => (
                    <MovieCard
                        imdbID={item.imdbID}
                        image={item.Poster}
                        title={item.Title}
                        year={item.Year}
                    />
                )) :
                    <>"Loading"</>
                }
            </div>
        </div>
    );
};

export default Home;