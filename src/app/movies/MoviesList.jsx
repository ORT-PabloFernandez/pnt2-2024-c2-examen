import MovieListItem from "./MovieListItem";

export default function MoviesList({ movies }) {
  return (
    <ul className="movie-list">
      {movies.map(movie => (
        <MovieListItem
          id={movie._id}
          poster={movie.poster}
          title={movie.title}
          fullplot={movie.fullplot}
        />
      ))}
    </ul>
  );
}
