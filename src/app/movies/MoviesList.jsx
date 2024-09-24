import Movie from "./Movie";

function MoviesList(params){
return(
    <ul style={{ listStyleType: "none", padding: 0 }}>
        {params.movies.map( (usuario) => (
        <Movie
            poster = {`/img/${usuario.poster["Display name"]}.jpg `}
            title = {usuario.title}
            fullplot = {usuario.fullplot} 
         />
        ))}
        </ul>

)
}



export default MoviesList;