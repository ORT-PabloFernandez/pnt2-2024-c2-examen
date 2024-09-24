import Pelicula from "./Pelicula";
import styles from "../styles/styles.css"

export default function PeliculasList(props){
    return(
        <ul>
            {props.Peliculas.map((pelicula) => {
                 return (
                    <Pelicula 
                      Id={pelicula._id}
                      Poster={pelicula.poster}
                      Title={pelicula.title}
                      Descripcion={pelicula.fullplot}
                    />
                 )
            })}
        </ul>
    )
}