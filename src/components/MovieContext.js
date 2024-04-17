import React, { createContext, useReducer, useContext } from 'react';

const MovieContext = createContext();

const initialState = {
    movies: [], 
    watchlist: [], // List of movies in the user's watchlist
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return { ...state, movies: action.payload };
        case 'ADD_TO_WATCHLIST':
            return { ...state, watchlist: [...state.watchlist, action.payload] };
        case 'REMOVE_FROM_WATCHLIST':
            return { ...state, watchlist: state.watchlist.filter(movie => movie.id !== action.payload.id) };
        default:
            return state;
    }
};

export const MovieProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <MovieContext.Provider value={{ state, dispatch }}>
            {children}
        </MovieContext.Provider>
    );
};

export const useMovieContext = () => useContext(MovieContext);
