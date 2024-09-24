"use client";

import PeliculasList from "./PeliculasList";
import { useState, useEffect } from "react"

const MoviePage = () => {
    const [peliculas, setPeliculas] = useState([]);
    const [page,setPage] = useState(1);
    const [pageSize] = useState(30);

    useEffect(() => {
        fetch(`https://mflixbackend.azurewebsites.net/api/movies?pageSize=${pageSize}&page=${page}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setPeliculas(data);
        }). catch((error) => console.log(error));
    }, [page, pageSize]);

    return(
        <div>
            <div>
                <PeliculasList peliculas = {peliculas}/>
            </div>
            <div>
                <button onClick={() => setPage((prevPage) => prevPage -1)} disabled = {page === 1} style={{color: 'red', fontWeight: 'bold'}}>
                    Anterior
                </button>
                <button onClick={() => setPage((prevPage) => prevPage + 1)} style={{color: 'yellow', fontWeight: 'bold'}}>
                    Siguiente
                </button>
            </div>
        </div>
    )
}

export default MoviePage;