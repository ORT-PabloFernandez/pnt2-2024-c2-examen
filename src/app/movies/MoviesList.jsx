import MovieDetails from "./MovieDetails"

export default function MoviesList(props){
    return(
    <ul style={{listStyleType:"none", padding:0}}>
        {props.movies.map((movie)=>(
            <MovieDetails
            id={movie._id}
            poster={movie.poster}
            title={movie.title}
            fullplot={movie.fullplot}/>
        ))}
    </ul>
    );
}