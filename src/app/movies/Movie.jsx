"use client";
import Link from "next/link";
import "./Movie.css";

function Movie(props) {
    return (
        <li className="movie-item">
            <div className="card movie-item__content">
                <Link href={`/movies/${props.id}`}>
                <div className="movie-item__image avatar">
                        <img src={props.poster} alt={props.title}/>
                    </div>
                    <div className='movie-item__info'>
                        <h2>{props.title}</h2>
                        <h3>{props.plot}</h3>
                    </div>
                </Link>
            </div>
        </li>
    );
}

export default Movie;