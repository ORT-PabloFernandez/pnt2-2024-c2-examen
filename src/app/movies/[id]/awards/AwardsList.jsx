"use client";

export default function Award({movie}) {  
    return(
        <div>
            <h2>Premios: {movie.awards.wins}</h2>
            <h2>Nominaciones: {movie.awards.nominations}</h2>
        </div>        
    );
};