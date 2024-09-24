"use client";
import Link from "next/link";
import "./styles.css";

function Pelicula(pelicula) {
  return (
    <li className="movies-item">
      <div>
        <div className="">
          <img src={pelicula.poster} alt={pelicula.title} />
        </div>
        <div>
          <h2>{pelicula.title}</h2>
          <h3>{pelicula.fullPlot}</h3>
        </div>
      </div>
      <div>
        <Link className="link" href={`/peliculas/detalle/${pelicula.id}`}>
          Detalles
        </Link>
        <Link className="link" href={`/peliculas/galardones/${pelicula.id}`}>
          Premios y Nominaciones
        </Link>
      </div>
    </li>
  );
}
export default Pelicula;
