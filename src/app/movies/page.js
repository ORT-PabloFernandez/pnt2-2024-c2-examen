"use client";
import { useState, useEffect } from "react";
import MovieList from "./MovieList.jsx";

const MoviePage = (props) => {
    const[movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(
            "https://mflixbackend.azurewebsites.net/api/movies?pageSize=30&page=1"
        )
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setMovies(data);
        })
        .catch((error) => console.log(error));
    }, []);

    return (
        <>
        <MovieList movies = {movies}/>
        </>
    );
};

export default MoviePage;