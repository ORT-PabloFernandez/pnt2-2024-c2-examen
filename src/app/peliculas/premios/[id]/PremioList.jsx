'use client';

import Premio from "./Premio";

const PremioList = ({premios}) => {
    return(
        <ul>
            {premios.peliculas.map((pelicula) => (
                <Premio 
                    awards = {pelicula.awards}
                    nominations = {pelicula.nominations}
                />
            ))}
        </ul>
    )
}

export default PremioList;