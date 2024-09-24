"use client";
import { useState, useEffect } from "react";
import Premios from "../Premios.jsx";

export default function Page({ params }) {
    const { id } = params;
    const [pelicula, setPelicula] = useState(null);

    useEffect(() => {
        fetch("https://mflixbackend.azurewebsites.net/api/movies?pageSize=30&page=1")
        .then((response) => response.json())
        .then((data) => setPelicula(data.find((pelicula) => pelicula._id === id)))
        .catch((e) => console.error(e))
    }, []);

    if (!pelicula) {
        return <div>Cargando detalles de premios...</div>;
    }

    return <Premios pelicula={pelicula} />;
}
