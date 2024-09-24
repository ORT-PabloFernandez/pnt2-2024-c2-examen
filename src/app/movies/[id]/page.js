"use client"
import {useState, useEffect} from 'react'
import MovieDetail from "../MovieDetail"

export default function PageDetails({params}) {
    const {id} = params
    const [movie, setUsuario] = useState({})

    useEffect(() => {
        fetch('https://mflixbackend.azurewebsites.net/api/movies?pageSize=30')
            .then((response) => response.json())
            .then((data) => {
                setUsuario(data.find(movie => movie._id === id));
                // console.log(data.find(movie => movie._id === id))
        })
        .catch((error) => {
            console.error('Error al obtener los datos:', error);
        });
    }, []);

    return(
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Movie Details</h1>
            {movie.cast && <MovieDetail id={movie._id} cast={movie.cast} directors={movie.directors} fplot={movie.fullplot} awards={movie.awards}/>}
        </div>
        // <div>
        //     <MovieDetail
        //         id={movie._id}
        //         poster={movie.poster}
        //         title={movie.title}
        //         fullplot={movie.fullplot}
        //     />
        // </div>
    )
}