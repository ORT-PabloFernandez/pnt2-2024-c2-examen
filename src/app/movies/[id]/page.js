"use client"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";

import MovieDetails from "./MovieDetails";


export default function MoviesDetails({ params }) {
    const [movie, setMovies] = useState(null);
    const searchParams = useSearchParams();

    const { id } = params;

    const pageSize = searchParams.get("pageSize");
    const page = searchParams.get("page");
    console.log("search in page ", page, " with a size of ", pageSize, "for id: ", id)
    useEffect(() => {
        fetch(`https://mflixbackend.azurewebsites.net/api/movies?pageSize=${pageSize}&page=${page}`)
            .then(response => response.json())
            .then(data => setMovies(data.find(movie => movie._id === id)))
            .catch(error => console.log(error))
    }, [page, pageSize, id]);

    return (
        <lu>
            {movie ? (
                <MovieDetails plot={movie.plot} cast={movie.cast} directors={movie.directors} />
            ) : (
                <p>Movie not found</p>
            )}
        </lu>
    )
}