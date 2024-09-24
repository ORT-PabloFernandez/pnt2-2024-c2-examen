"use client"
import Pelicula from "@/components/Pelicula";
import { useEffect, useState } from "react";

const Peliculas = () => {

    const [primeras30, setPrimeras30] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://mflixbackend.azurewebsites.net/api/movies?pageSize=30&page=1")
            .then((res) => res.json())
            .then(data => {
                if (data) {
                    setPrimeras30(data)
                } else {
                    console.error("Error al obtener las peliculas")
                }
                setLoading(false)
            })
            .catch(error => {
                console.error("Error en el request", error)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <h2>Cargando...</h2>
    }

    if (!primeras30) {
        return <h2>No se encontraron peliculas</h2>
    }

    return (
        <>
            <h1>Primeras 30 peliculas</h1>
            <div>
            {
                primeras30.map((pelicula, index) => (
                    <Pelicula poster={pelicula.poster} title={pelicula.title} fullPlot={pelicula.fullplot} index={index} id={pelicula._id}/>
                ))
            }
            </div>
        </>
    )
}

export default Peliculas;