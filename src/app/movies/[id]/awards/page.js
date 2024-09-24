"use client";
import { useState, useEffect } from "react";
import AwardsList from "./AwardsList.jsx";

export default function MovieDetails ({params}) {
    const {id} = params;
    const[movie, setMovie] = useState([]);

    useEffect(() => {
        fetch(
            "https://mflixbackend.azurewebsites.net/api/movies?pageSize=30&page=1"
        )
        .then((response) => response.json())
        .then((data) => {
            setMovie(data.find((movie) => movie._id === id));
        })
        .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <AwardsList movie = {movie}/>
        </>
    );
};