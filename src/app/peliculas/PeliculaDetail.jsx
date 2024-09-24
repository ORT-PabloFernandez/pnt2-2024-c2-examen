import Link from "next/link";
import styles from "../styles/styles.css"

export function PeliculaDetail({Peliculas}){
    if (!Peliculas){
        return <div>Cargando detalle de la pelicula</div>
    }

    return(
        <div>
            <h1>Titulo: {Peliculas.title}</h1>
            <p> Resume: {Peliculas.fullplot}</p>
            <h3>Directors: {Peliculas.directors}</h3>
            <h3>Cast: {Peliculas.cast}</h3>

            <Link href={`/peliculas/${Peliculas._id}/premios`}>
               <button className="btn-premios">Ver premios</button>
            </Link>
        </div>
    )
}