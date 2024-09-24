export default function Detalle(props) {
  return (
    <li>
      <div>
        <h2>Directors:</h2>
        <p>{props.pelicula.directors}</p>
      </div>
      <div>
        <h3>Cast:</h3>
        <p>{props.pelicula.cast}</p>
      </div>
      <div>
        <h2>Fullplot: </h2>
        <p>{props.pelicula.fullplot}</p>
      </div>
    </li>
  );
}
