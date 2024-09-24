"use client";
import PeliculasList from "./PeliculasList";
import { useState, useEffect } from "react";

const PeliculasPage = (props) => {
  const [peliculas, setPeliculas] = useState([]);
  useEffect(() => {
    fetch(
      "https://mflixbackend.azurewebsites.net/api/movies?pageSize=30&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setPeliculas(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <PeliculasList peliculas={peliculas} />
    </div>
  );
};

export default PeliculasPage;
