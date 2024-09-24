"use client";

function Detalle({ pelicula }) {
  return (
    <div>
      <h1>{pelicula.title}</h1>
      <h2>{pelicula.cast ? pelicula.cast.join(", ") : "cargando"}</h2>
      <h2>{pelicula.directors ? pelicula.directors.join(", ") : ""}</h2>
      <p>{pelicula.plot}</p>
    </div>
  );
}

export default Detalle;
