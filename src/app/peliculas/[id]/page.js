"use client"
import { useState, useEffect } from "react";
import { PeliculaDetail } from "../PeliculaDetail";


export default function PeliculaDetails({params}) {
    const { id } = params;
    const [ pelicula, setPelicula ] = useState([]);

    useEffect(() => {
        fetch("https://mflixbackend.azurewebsites.net/api/movies?pageSize=30&page=1")
        .then((response) => response.json())
        .then((data) => setPelicula(data.find((pelicula) => pelicula._id === id)))
        .catch((e) => console.error(e))
    }, []);

    return(
        <>
         <PeliculaDetail Peliculas={pelicula} />
        </>
    )
}