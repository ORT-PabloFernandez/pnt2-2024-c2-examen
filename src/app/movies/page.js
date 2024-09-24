"use client";
import MovieList from "./MovieList.jsx"
import {useState, useEffect} from "react";

const MoviePage = (props) => {
    const [movies, setMovies] = useState([]);

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
        <div>
            <h1>Lista de Peliculas</h1>
            <MovieList movies={movies} />
        </div>
    );
};

export default MoviePage;