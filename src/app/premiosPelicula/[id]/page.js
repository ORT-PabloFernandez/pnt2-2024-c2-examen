"use client"
import { useEffect, useState } from 'react';

const PremiosPelicula = ({ params }) => {
    const { id } = params;
    const [pelicula, setPelicula] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://mflixbackend.azurewebsites.net/api/movies?pageSize=30&page=1")
            .then((res) => res.json())
            .then((data) => {
                const foundPelicula = data.find((pelicula) => pelicula._id === id)
                if (foundPelicula) {
                    setPelicula(foundPelicula);
                } else {
                    console.error("Error en el request", error)
                }
                setLoading(false)
            })
            .catch(error => {
                console.log("Error en el request", error)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <h2>Cargando...</h2>
    }

    if (!pelicula) {
        return <h2>No se encontro la pelicula</h2>
    }

    return (
        <>
            <div>
                <h2>Nominaciones: {pelicula.awards.nominations}</h2>
                <h2>Premios: {pelicula.awards.wins}</h2>
                <h2>En conclusion: {pelicula.awards.text}</h2>
            </div>
        </>
    )
}

export default PremiosPelicula;