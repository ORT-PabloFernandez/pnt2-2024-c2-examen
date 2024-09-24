"use client";
import Link from "next/link";
import "./Movie.css";

function Movie(props) {
    if(!props) {
        return <div>Cargando datos de la película</div>;
    }

    return (        
        <li className="movie-item">
            <div className="card movie-item__content">
                <Link href = {`/movies/${props.Id}`}>
                        <div className="movie-item__info">
                        <h2>Título: {props.title}</h2>
                        <h2>Descripción: {props.fullplot}</h2>
                    </div>                
                </Link>
            </div>
            <button>
                <Link href = {`/movies/${props._id}/awards`}>                    
                    <h2>Premios y nominaciones</h2>            
                </Link>
            </button>
        </li>
    );
};

export default Movie;