"use client";
import Movie from "./Movie";
import "./Movie.css";

const MovieList = (props) => {
    console.log(props)
    return (
        <div>
            <ul className="movies-list">
                {props.movies.map((movie) => (
                    <Movie
                        id={movie._id}
                        poster={movie.poster}
                        title={movie.title}
                        plot={movie.plot}
                    />
                ))}
            </ul>
        </div>
    );
};

export default MovieList;