"use client";

function Galardones(props) {
  return (
    <div>
      <h1>{props.pelicula.awards ? props.pelicula.awards.text : "cargando"}</h1>
    </div>
  );
}

export default Galardones;
