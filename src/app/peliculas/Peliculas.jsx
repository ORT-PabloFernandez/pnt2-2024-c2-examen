"use client";

import Link from "next/link"

function Pelicula(props){
    return(
        <li>
            <div>
                <div>
                <br></br>
                    <h1 style={{fontWeight: 'bold'}}>{props.title}</h1>
                    <img src={props.poster} alt={props.title} style={{borderRadius: '15px'}}/>
                    <p>{props.fullplot}</p>
                </div>
                <div>
                    <Link href={`/peliculas/detalle/${props._id}`} style={{color: 'blueviolet', fontWeight: 'bold'}}>Detalle</Link>
                    <Link href={`/peliculas/premios/${props._id}`} style={{color: 'greenyellow', fontWeight: 'bold'}}>Premios</Link>
                </div>
            </div>
        </li>
    )
}

export default Pelicula;