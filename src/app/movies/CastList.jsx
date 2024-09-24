"use client";

export default function Cast({casts}) {
    if(!casts) {
        return <div>Cargando datos del cast</div>;
    }

    return(
        <ul>
            {casts.movies.map((cast) => (
               <li>
                <div>
                </div>
               </li> 
            ))}
        </ul>
    );
};