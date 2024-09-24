"use client"
import { useState, useEffect } from "react";
import PeliculasList from "./PeliculasList";


export default function Pelicula() {
    const [ peliculas, setPelicula ] = useState([]);

    useEffect(() => {
        const fetchPeliculas = async () => {
            try {
                const response = await fetch("https://mflixbackend.azurewebsites.net/api/movies?pageSize=30&page=1");
                const data = await response.json();
                setPelicula(data);
                console.log(data)
            } catch (e) {
                console.error(e);
            }
        };

        fetchPeliculas();
    }, []);

    return(
        <>
           <PeliculasList Peliculas={peliculas} />
        </>
    )

}