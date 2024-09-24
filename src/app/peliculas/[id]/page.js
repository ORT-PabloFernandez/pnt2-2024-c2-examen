"use client"
import { useEffect, useState } from "react";

const Peliculas = ({params}) => {

    const { id } = params;
    const [pelicula, setPelicula] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://mflixbackend.azurewebsites.net/api/movies?pageSize=30&page=1")
            .then((res) => res.json())
            .then(data => {
                const foundPelicula = data.find((pelicula) => pelicula._id === id)
                if (foundPelicula) {
                    setPelicula(foundPelicula);
                } else {
                    console.error("Error al obtener la pelicula")
                }
                setLoading(false)
            })
            .catch(error => {
                console.error("Error en el request", error)
                setLoading(false)
            })
    }, [id])

    if (loading) {
        return <h2>Cargando...</h2>
    }

    if (!pelicula) {
        return <h2>No se encontro la pelicula</h2>
    }

    return (
        <>
            <h1>{pelicula.title}</h1>
            <div>
            <h2>Reparto</h2>
            {
                pelicula.cast.map((actor, index) => (
                    <h3 key={index}>{actor}</h3>
                ))
            }
            <h2>Directores</h2>
            {
                pelicula.directors.map((director, index) => (
                    <h3 key={index}>{director}</h3>
                ))
            }
            <h2>Resumen</h2>
            <p>{pelicula.plot}</p>
            </div>
        </>
    )
}

export default Peliculas;