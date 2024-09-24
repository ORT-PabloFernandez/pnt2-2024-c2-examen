import "./Movie.css";
import Movie from "./Movie";

const MovieList = (props) => {
    return (
        <ul className="movie-list">
            {props.movies.map((movie) => (
                <Movie 
                    Id={movie["_id"]}
                    Poster={movie.poster}
                    Title={movie.title}
                    Fullplot={movie.fullplot}
                />
            ))}
        </ul>
    );
};


export default MovieList;