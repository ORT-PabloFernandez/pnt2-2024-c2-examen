import Movie from "./Movie";

const MovieList = (props) => {
    if(!props) {
        return <div>Cargando datos de las películas</div>;
    }

    return (
        <ul>
            {props.movies.map((movie) => (
                <Movie
                    //poster
                    /*URL buscar poster
                    <img src={props.Picture} alt={props.UserName} />

                    imageUser.src = `images/${user["Display name"]}.jpg`; */              
                    title = {movie.title}
                    fullplot = {movie.fullplot}
                />
            ))}
        </ul>
    );
};

export default MovieList;