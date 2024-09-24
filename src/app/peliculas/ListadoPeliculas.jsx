// import Pelicula from "./Pelicula";

// const ListaPeliculas = (props) => {
//   return (
//     <ul>
//       {props.peliculas.map((pelicula) => (
//         <Pelicula
//           _id={pelicula._id}
//           poster={pelicula.poster}
//           title={pelicula.title}
//           fullplot={pelicula.fullplot}
//         />
//       ))}
//     </ul>
//   );
// };
// export default ListaPeliculas;

//Intento de paginado

import Pelicula from "./Pelicula";

const ListaPeliculas = (props) => {
  const { peliculas, numeroDePagina, onChangePage } = props;
  return (
    <div>
      <ul>
        {props.peliculas.map((pelicula) => (
          <Pelicula
            _id={pelicula._id}
            poster={pelicula.poster}
            title={pelicula.title}
            fullplot={pelicula.fullplot}
            numeroDePagina={numeroDePagina}
          />
        ))}
      </ul>

      <div>
        <button
          onClick={() => onChangePage(numeroDePagina - 1)}
          disable={numeroDePagina <= 1}
        >
          {" "}
          Anterior{" "}
        </button>
        <span>Pagina {numeroDePagina}</span>
        <button onClick={() => onChangePage(numeroDePagina + 1)}>
          Siguiente
        </button>
      </div>
    </div>
  );
};
export default ListaPeliculas;
