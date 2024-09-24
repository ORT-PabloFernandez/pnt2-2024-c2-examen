"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function Home() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const handleSeeDetails = (movie) => {
    localStorage.setItem("movie", JSON.stringify(movie));
    router.push(`/peliculas/${movie._id}`);
  };

  const handlePremios = (movie) => {
    localStorage.setItem("movie", JSON.stringify(movie));
    router.push(`/peliculas/premios/${movie._id}`);
  };

  useEffect(() => {
    const request = () => {
      fetch(
        `https://mflixbackend.azurewebsites.net/api/movies?pageSize=30&page=${page}`
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
    request();
  }, [page]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="dark:invert">Examen Nuevas Tecnologias 2</h1>
        <section className="flex items-center gap-4 mt-4">
          <h2>Página {page + 1}</h2>
          <button
            className="bg-blue-700 text-white px-4 py-2 rounded-md disabled:opacity-50"
            disabled={page === 0}
            onClick={() => setPage(page - 1)}
          >
            Página Anterior
          </button>
          <button
            className="bg-blue-700 text-white px-4 py-2 rounded-md"
            onClick={() => setPage(page + 1)}
          >
            Página Siguiente
          </button>
        </section>

        <ul className="flex gap-12 flex-col p-4 cursor-pointer">
          {data.map((movie) => (
            <li>
              <img className="h-40" src={movie.poster} alt={movie.title} />
              <h2>{movie.title}</h2>
              <p>{movie.fullplot}</p>
              <section className="flex items-center gap-4 mt-4">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  onClick={() => handleSeeDetails(movie)}
                >
                  Ver mas
                </button>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-md"
                  onClick={() => handlePremios(movie)}
                >
                  Premios y nominaciones
                </button>
              </section>
            </li>
          ))}
        </ul>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Todos los derechos reservados
      </footer>
    </div>
  );
}
