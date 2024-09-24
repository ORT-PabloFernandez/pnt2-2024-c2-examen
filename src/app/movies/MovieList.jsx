import Movie from "./Movie.jsx";
import "./movie.css";
const MovieList = (props) => {
    return (
        <ul>
            {props.movies.map((movie) => (
                <div>
                    <Movie
                    id= {movie._id}
                    poster = {movie.poster}
                    title = {movie.title}
                    fullplot = {movie["fullplot"]}
                    />
                </div>
            ))}
        </ul>
    )
}

export default MovieList