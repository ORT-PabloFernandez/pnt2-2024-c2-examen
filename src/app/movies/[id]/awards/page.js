"use client"
import {useState, useEffect} from 'react'
import { useParams } from 'next/navigation'
import MovieAward from "../MovieAward"

export default function PageAwards() {
    const params = useParams()
    
    const id = params.id
    console.log(id)
    
    const [award, setAward] = useState({})

    useEffect(() => {
        fetch('https://mflixbackend.azurewebsites.net/api/movies?pageSize=30')
            .then((response) => response.json())
            .then((data) => {
                setAward(data.find(award => award._id === id).awards);
                // console.log(data.find(award => award._id === id).awards)
        })
        .catch((error) => {
            console.error('Error al obtener los datos:', error);
        });
    }, []);

    return(
        <div>
            <MovieAward
                wins={award.wins}
                nominations={award.nominations}
                text={award.text}
            />
        </div>
    )
}