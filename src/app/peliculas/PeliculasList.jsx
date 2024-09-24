"use client";

import Peliculas from "@/app/peliculas/Peliculas";

const PeliculasList = (premios) => {
    return (
        <ul>
            {premios.peliculas.map((pelicula) =>(
                <Peliculas 
                    _id = {pelicula._id}
                    poster = {pelicula.poster}
                    title = {pelicula.title}       
                    fullplot = {pelicula.fullplot}
                />
            ))}
        </ul>
    )
}

export default PeliculasList;