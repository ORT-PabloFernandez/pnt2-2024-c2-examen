"use client"

export default function MovieDetails(props) {
    console.log("detail props ", props)
    return (
        <li>
            <p>Movie details</p>
            <p>{props.plot}</p>
            <p>Cast: {props.cast.map(actor => <p>| {actor}</p>)}</p>
            <p>Directors: {props.directors.map(director => <p>| {director}</p>)}</p>
        </li>
    )
}