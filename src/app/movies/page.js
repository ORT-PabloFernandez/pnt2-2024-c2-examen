"use client";
import { useState ,useEffect } from "react";
import MoviesList from "./MoviesList";

function MoviesPage(){
    const [movies, setMovie] = useState([]);
    useEffect(() => {
        fetch("https://mflixbackend.azurewebsites.net/api/movies")
        .then(res => res.json())
        .then(data => {setSales(data)})
        .catch((error) => console.log(error))
    },[])

    return(
        <div>
             <MoviesList movies = {movies} />   


        </div>
    )
}

export default MoviesPage;