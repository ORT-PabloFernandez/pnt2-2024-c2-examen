"use client"
import "./movie.css";
import Link from "next/link";

function Movie (props) {
    return(
        <li>
            <Link href= {`/movies/${props.id}`}>
            <img src={props.poster} alt="" />
            <h2>Title</h2>
            <h2>{props.title}</h2>
            </Link>
            <h3>Description</h3>
            <p>{props.fullplot}</p>
            <Link href = {`/movies/premios`}>
            <button>AWARDS</button>
            </Link>
        </li>
    )
}

export default Movie;