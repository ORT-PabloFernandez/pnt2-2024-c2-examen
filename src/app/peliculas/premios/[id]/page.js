"use client";
import Premio from "./Premio";
import { useState, useEffect } from "react";

const PaginaPremios = ({ params }) => {
  const [premios, setPremios] = useState([]);
  const { id } = params;

  useEffect(() => {
    fetch(
      "https://mflixbackend.azurewebsites.net/api/movies?pageSize=30&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setPremios(data.find((pelicula) => pelicula._id === id).awards);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Premio awards={premios} />
    </div>
  );
};
export default PaginaPremios;
