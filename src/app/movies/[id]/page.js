"use client";
import { useState, useEffect } from "react";
import Movie from "../Movie.jsx";
import CastList from "../CastList.jsx";
import DirectorList from "../DirectorList.jsx";

export default function MovieDetails ({params}) {
    const {id} = params;
    const[movie, setMovie] = useState([]);

    useEffect(() => {
        fetch(
            "https://mflixbackend.azurewebsites.net/api/movies?pageSize=30&page=1"
        )
        .then((response) => response.json())
        .then((data) => {
            setMovie(data.find((movie) => movie._id === id));
        })
        .catch((error) => console.log(error));
    }, []);

    return (
        <>
            {/*<DirectorList directors = {movie.director} />
            <CastList casts = {movie.cast} />
            <h2>Resumen: {movie.plot}</h2>*/}
            <h2>Resumen: </h2>
        </>
    );
};