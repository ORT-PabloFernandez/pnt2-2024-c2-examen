"use client"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";



export default function MoviesAwards({ params }) {
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
                <p>Awards {movie.awards.text}</p>
            ) : (
                <p>Movie not found</p>
            )}
        </lu>
    )
}