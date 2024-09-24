"use client";
import {useState, useEffect} from "react";
import MovieDetails from "./MovieDetails.jsx";

export default function MovieDetail({ params }) {
const { id } = params;
console.log("ID:",id)
console.log("PARAMS",params)
const [movie, setMovie] = useState(null)

useEffect(() => {
    fetch("https://mflixbackend.azurewebsites.net/api/movies?pageSize=30&page=1")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data)

        const foundMovie = data.find((movie) => movie._id === id)
        setMovie(foundMovie);
    })
    .catch((error) => console.log(error))
}, [id])

return(
    <div>
        {movie ? (
            <div>
            <h1>Detalles de la pelicula</h1>
            <MovieDetails
            id={movie.id}
            resumen={movie.plot}
            directores={movie.directors}
            reparto={movie.cast}
            />
            </div>
        ):(
            <p>Cargando...</p>
        )}
    </div>
)
}