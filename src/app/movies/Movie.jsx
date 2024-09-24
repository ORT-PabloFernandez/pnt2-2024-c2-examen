"use client"
import "./Movie.css";
import Link from "next/link";

function Movie(props) {
    return(
        <li className="movie-element">
            <div className="movie-card">
                <div className="movie-img">
                    <img src={props.Poster} />
                </div>
                <div className="movie-text">
                    <h2>{props.Title}</h2>
                    <h3>{props.Fullplot}</h3>
                </div>
                <div className="movie-buttons"> 
                    <Link href={`/movies/details/${props.Id}`}>
                        <button>Detalles</button>
                    </Link>
                    <Link href={`/movies/awards/${props.Id}`}>
                        <button>Premios</button>
                    </Link>
                </div>              
            </div>
        </li>
    )
}

export default Movie;