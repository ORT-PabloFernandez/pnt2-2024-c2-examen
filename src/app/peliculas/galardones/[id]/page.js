"use client";
import { useState, useEffect } from "react";
import Galardones from "./Galardones";

function GalardonesPage({ params }) {
  const [pelicula, setPelicula] = useState({});
  const { id } = params;

  useEffect(() => {
    fetch(
      "https://mflixbackend.azurewebsites.net/api/movies?pageSize=30&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setPelicula(data.find((pelicula) => pelicula._id == id));
      })
      .catch((error) => console.log(error));
  }, []);

  return <Galardones pelicula={pelicula} />;
}

export default GalardonesPage;
