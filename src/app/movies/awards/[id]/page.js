"use client";
import { useState, useEffect } from "react";

export default function MovieAwards({ params }) {
  const { id } = params;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(
      `https://mflixbackend.azurewebsites.net/api/movies?pageSize=30&page=1`
    )
      .then(response => response.json())
      .then(data => setMovie(data.find(movie => movie._id === id)))
      .catch(error => console.error(error));
  }, []);

  if (!movie) {
    return <div>Cargando...</div>;
  } else {
    return (
      <div>
        <h1>Awards and nominations for "{movie.title}"</h1>
        <h2>Wins: {movie.awards.wins}</h2>
        <h2>Nominations: {movie.awards.nominations}</h2>
        <h2>Adicional information: {movie.awards.text}</h2>
      </div>
    );
  }
}
