"use client";
import Detalle from "./Detalle";
import { useState, useEffect } from "react";

const PaginaDetalles = ({ params }) => {
  const [pelicula, setDetalle] = useState([]);
  const { id } = params;

  useEffect(() => {
    fetch(
      "https://mflixbackend.azurewebsites.net/api/movies?pageSize=30&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setDetalle(data.find((pelicula) => pelicula._id === id));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Detalle pelicula={pelicula} />
    </div>
  );
};
export default PaginaDetalles;
