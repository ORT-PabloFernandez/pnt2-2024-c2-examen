import Link from "next/link";
import styles from "../styles/styles.css"


export default function Pelicula(props){
    return(
        <li>
            <Link href={`/peliculas/${props.Id}`}>
              <div>
                  <img src={props.Poster}  />
                  <h2>Titulo: {props.Title} </h2>
                  <h2>Descripcion: {props.Descripcion} </h2>
              </div>
            </Link> 
        </li>
    )
}