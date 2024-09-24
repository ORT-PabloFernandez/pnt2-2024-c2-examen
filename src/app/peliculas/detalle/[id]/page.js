"use client";

import { useState,useEffect } from "react";
import Detalle from "./Detalle";

const DetallePelicula = ({params}) => {
    const [detalle, setDetalle] = useState([]);
    const {id} = params;
    const [page, setPage] = useState(1);
    const [pageSize] = useState(30);

    useEffect(() => {
        fetch(`https://mflixbackend.azurewebsites.net/api/movies?pageSize=${pageSize}&page=${page}`)
        .then((response) => response.json())
        .then((data) => {
            const pelicula = data.find(pelicula => pelicula._id === id);
            if(pelicula){
                setDetalle(pelicula)
            }
        }).catch((error) => console.log(error));
    },[id,pageSize,page]);

    return(
        <div>
            <Detalle detalle = {detalle}/>
        </div>
    )
}

export default DetallePelicula;