import "./global.css";
import Link from "next/link";
export default function Pelicula(props) {
  return (
    <li className="item">
      <div className="item__content">
        <div className="poster-image">
          <img src={props.poster} alt={props.title}></img>
        </div>
        <div className="item__info">
          <h1>Titulo: {props.title}</h1>
          <h3>Sinopsis:{props.fullplot} </h3>
          <p>{props.plot}</p>
        </div>
        <div className="item__content">
          <Link href={`/peliculas/detalle/${props._id}`}>Detalle reparto</Link>
          <Link href={`/peliculas/premios/${props._id}`}>Detalle premios</Link>
        </div>
      </div>
    </li>
  );
}
