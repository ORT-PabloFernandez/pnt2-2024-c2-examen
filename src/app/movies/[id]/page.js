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
            .then(data => {
                console.log("data from endpoint", data);
                const foundMovie = data.find(movie => { console.log(movie._id); console.log(movie._id === id); movie._id === id })
                // TODO found but not not setted
                setMovies(foundMovie);
                if (foundMovie) {
                    console.log("Found movie!!!!!", foundMovie);
                } else {
                    console.log("Movie not found");
                }
            })
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