"use client";
import { useState, useEffect } from "react";
import CastInfo from "../CastInfo"
import DirectorInfo from "../DirectorInfo"
import Link from "next/link";
import "../styles.css"

export default function MovieInfo({ params }){
    const { id } = params;
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch(`https://mflixbackend.azurewebsites.net/api/movies?pageSize=30&page=1`)
        .then(response => response.json())
        .then(data => setMovie(data.find((movie) => movie._id === id)))
        .catch(error => console.error(error));
    }, [])

    if(!movie){
        return <h1>Cargando...</h1>
    } else {
        return (
            <div>
                <h1>{movie.title}</h1>
                <p>{movie.plot}</p>
                <br/>
                <CastInfo cast={movie.cast}/>
                <br/>
                <DirectorInfo director={movie.directors}/>
                <br/>
                <Link href={`./awards/${id}`}>
                    <button>Ver premios y nominaciones</button>
                </Link>
            </div>
        )
    }

}