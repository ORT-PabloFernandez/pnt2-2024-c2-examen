"use client";

export default function Director({directors}) { 
    if(!directors) {
        return <div>Cargando datos del director</div>;
    }

    return(
        <ul>
            {directors.movies.map(director => (
               <li>
               </li> 
            ))}
        </ul>
    );
};