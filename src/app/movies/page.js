"use client"
import MovieList from './MovieList';
import { useState, useEffect } from 'react';

const MoviesPage = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('https://mflixbackend.azurewebsites.net/api/movies?pageSize=30')
            .then(response => response.json())
            .then(data => {
                setMovies(data)
            })
            .catch(error => {
                console.error('Error fetching Movies:', error)
            });
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Movies List</h1>
            <MovieList movies={movies}/>
        </div>
    );
};

export default MoviesPage;