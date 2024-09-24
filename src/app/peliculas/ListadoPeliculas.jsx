import Pelicula from "./Pelicula";

const ListaPeliculas = (props) => {
  return (
    <ul>
      {props.peliculas.map((pelicula) => (
        <Pelicula
          _id={pelicula._id}
          poster={pelicula.poster}
          title={pelicula.title}
          fullplot={pelicula.fullplot}
        />
      ))}
    </ul>
  );
};
export default ListaPeliculas;
