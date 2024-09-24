"use client";
import { useEffect, useState } from "react"
import MoviesList from "./MoviesList"

export default function MoviePage(){
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`https://mflixbackend.azurewebsites.net/api/movies?pageSize=30&page=1`)
        .then(response => response.json())
        .then(data => setMovies(data))
        .catch(error => console.log("Error ", error))
    }, [])

    return (
        <div className="movie-page">
            <h1 className="movie-page-title">Listado de peliculas</h1>
            <MoviesList movies={movies}/>
        </div>
    )
}