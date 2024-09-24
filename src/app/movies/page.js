"use client"
import Movie from "./Movie"

import { useEffect, useState } from "react";

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetch(`https://mflixbackend.azurewebsites.net/api/movies?pageSize=30&page=${page}`)
            .then(response => response.json())
            .then(data => {
                console.log("data from endpoint", data);
                setMovies(data);
            })
            .catch(error => console.log(error))
    }, [page]);

    const nextPage = () => {
        setPage(page => page + 1)
    }

    const prevPage = () => {
        if (page > 1)
            setPage(page => page - 1);
    }

    return (
        <div>
            <ul>
                {movies.map(movie => (
                    <Movie
                        id={movie._id}
                        poster={movie.poster}
                        title={movie.title}
                        fullplot={movie.fullplot}
                        page={page} />
                ))}
            </ul>
            <footer style={footerStyle} >
                <button onClick={prevPage}> Previous page | </button>
                <p> Page: {page} | </p>
                <button onClick={nextPage}>NextPage </button>
            </footer>
        </div>
    );
}

const footerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    bottom: 0,
    width: '100%',
};
