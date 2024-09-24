"use client"
import { useState, useEffect } from "react"
import MovieDatails from "../MovieDetails"

function TitleDatails({params}){
    const {title} = params;
    const {movie, setMovie} = useState([]);

    useEffect(() => {
        fetch("https://mflixbackend.azurewebsites.net/api/movies")
        .then((response) => response.json)
        .then((data) => setMovie(data.find((movie) =>movie.title == title )))
        .catch((error) => console.log(error))
    },[title])
 
    return(
        <MovieDatails movieDetails = {movie} />
    )

}

