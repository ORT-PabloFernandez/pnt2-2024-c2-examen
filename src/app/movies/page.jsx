"use client"
import MoviesList from "./MoviesList";
import {useState, useEffect} from "react"

export default function MoviesPage(){
    const [movies, setMovies] = useState([]);

    useEffect(()=> {
        fetch("https://mflixbackend.azurewebsites.net/api/movies?pageSize=30&page=1")
        .then(res => res.json())
        .then(data => {setMovies(data)})
        .catch((error) => console.error(error))
    }, [])

    return(
        <div>
            <MoviesList movies={movies}></MoviesList>
        </div>
    )
}