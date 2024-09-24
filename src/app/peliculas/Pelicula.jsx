import Link from "next/link";

export default function Producto(props) {
  return (
    <li>
      <div>
        <img src={props.poster} alt={props.title} />
        {/* <img href={props.poster} alt={props.title} /> */}
      </div>
      <div>
        <h2> Title: {props.title}</h2>
        <h2>Description:</h2>
        <p>{props.fullplot}</p>
      </div>
      <div>
        <Link href={`/peliculas/detalle/${props._id}`}>Detalles</Link>
      </div>
      <div>
        <Link href={`/peliculas/premios/${props._id}`}>
          Premios y Nominaciones
        </Link>
      </div>
    </li>
  );
}
