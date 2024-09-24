import Pelicula from "./Pelicula";
import "./styles.css";

const PeliculasList = (props) => {
  return (
    <ul className="movies-container">
      {props.peliculas.map((pelicula) => (
        <Pelicula
          id={pelicula._id}
          title={pelicula.title}
          poster={pelicula.poster}
          fullPlot={pelicula.fullplot}
        />
      ))}
    </ul>
  );
};

export default PeliculasList;
