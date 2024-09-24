// "use client";
// import { useState, useEffect } from "react";
// import ListadoPeliculas from "./ListadoPeliculas";

// const PaginaPeliculas = () => {
//   const [peliculas, setPeliculas] = useState([]);

//   useEffect(() => {
//     fetch(
//       "https://mflixbackend.azurewebsites.net/api/movies?pageSize=30&page=1"
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setPeliculas(data);
//       })
//       .catch((error) => console.log(error));
//   }, []);
//   return (
//     <div>
//       <ListadoPeliculas peliculas={peliculas} />
//     </div>
//   );
// };

// export default PaginaPeliculas;

//Intento de paginación

"use client";
import { useState, useEffect } from "react";
import ListadoPeliculas from "./ListadoPeliculas";

const PaginaPeliculas = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [numeroDePagina, setNumeroDePagina] = useState(1);

  useEffect(() => {
    fetch(
      `https://mflixbackend.azurewebsites.net/api/movies?pageSize=30&page=${numeroDePagina}`
    )
      .then((response) => response.json())
      .then((data) => {
        setPeliculas(data);
      })
      .catch((error) => console.log(error));
  }, [numeroDePagina]);

  const manejarCambioPagina = (nuevaPagina) => {
    setNumeroDePagina(nuevaPagina);
  };

  return (
    <div>
      <ListadoPeliculas
        peliculas={peliculas}
        numeroDePagina={numeroDePagina}
        onChangePage={manejarCambioPagina}
      />
    </div>
  );
};

export default PaginaPeliculas;
