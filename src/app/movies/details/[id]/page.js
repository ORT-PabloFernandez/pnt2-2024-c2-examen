"use client";
import CastList from "./CastList";
import DirectorsList from "./DirectorsList";
import {useState, useEffect} from "react";

const MovieDetailsPage = (param) => {
    const {id} = param;
    const [movie, setMovie] = useState({});

    useEffect(() => {
        fetch(
            `https://mflixbackend.azurewebsites.net/api/movies?pageSize=30&page=1`
        )
        .then((response) => response.json())
        .then((data) => {
            console.log(data.find(movie => movie._id === id));
            setMovie(data.find(movie => movie._id === id));
        })
        .catch((error) => console.log(error));
    }, [])

    return(
        <div>
            <ul>
                <h1>Details de la pelicula</h1>
                <CastList castList={movie.cast} />
                <DirectorsList directorsList={movie.directors} />
                <h2>Resumen: {movie.plot}</h2>
            </ul>
        </div>
    )
}

export default MovieDetailsPage;