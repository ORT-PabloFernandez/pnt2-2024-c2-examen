import { fetchPeliculas } from "./data/data";
import Pelicula from "./Pelicula";
import './global.css';
export async function ListaPeliculas(props) {
    const peliculas = await fetchPeliculas();

    return(
        <ul className="listado">
            {peliculas.map((pelicula)=>(
                <Pelicula
                _id={pelicula._id}
                poster={pelicula.poster}
                title ={pelicula.title}
                fullplot={pelicula.fullplot}
                />
            ))}
        </ul>
    )
}
