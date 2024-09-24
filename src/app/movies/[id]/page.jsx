"use client"

import {useState, useEffect} from "react";
import Movie from "../MovieDetails";
import AwardDetails from "../AwardDetails";


export default function MovieDetails({params}){
    const { id } = params;
    const [movie, setMovie]= useState([]);

    useEffect(()=> {
        fetch("https://mflixbackend.azurewebsites.net/api/movies?pageSize=100&page=1")
        .then((response) => response.json())
        .then((data)=> setSale(data.find((movie)=> movie._id === id)))
        .catch((e)=> console.error(e));
    },[id]);

    if(!movie){
        return(
            <div style={{
                textAlign: "center",
                padding: "50px",
                backgroundColor: "#f8d7da",
                color: "#721c24",
                borderRadius: "8px",
                margin: "0 auto",
                boxShadow: "0 4px 8px rgba(0,0,0, 0.1)"
                
            }}>
                <h1 style={{ fontSize: "24px", marginBottom: "16px"}}>Registro no encontrado.</h1>
                <p style={{fontSize:"18px"}}>La película seleccionada no existe o fue eliminada.</p>
                <a href="/movies" style={{
                    textDecoration: "none",
                    backgroundColor: "white",
                    color:"black",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    display: "inline-block",
                    marginTop: "20px"
                    }}>Volver</a>
            </div>
        );
    }else{
        return(
            <div style={{padding: "16px"}}>
                <div>
                    <img src={movie.poster} alt={movie.title}/>
                </div>
                <div>
                    <h1 style={{marginBottom:"16px",color: "black"}}>Titulo: {movie.title}</h1>
                    <h3 style={{marginBottom:"16px",color: "black"}}>Duración: {movie.runtime}</h3>
                    <h3 style={{marginBottom: "16px", color: "black" }}>Calificación: {movie.rated}</h3>
                </div>
                <div>
                    <p>{movie.fullplot}</p>
                </div>
                <br/>
                <AwardDetails Awards={movie.awards}/>
                <br/>
                <DirectorList items= {movie.directors}/>
                
            </div>

        );
    }
}