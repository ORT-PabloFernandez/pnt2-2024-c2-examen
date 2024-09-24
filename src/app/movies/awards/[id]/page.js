"use client";
import Awards from "./Awards";
import {useState, useEffect} from "react";

const AwardsPage = (param) => {
    const {id} = param;
    const [awards, setAwards] = useState({});

    useEffect(() => {
        fetch(
            `https://mflixbackend.azurewebsites.net/api/movies?pageSize=30&page=1`
        )
        .then((response) => response.json())
        .then((data) => {
            console.log(data.find(movie => movie._id === id).awards);
            setAwards(data.find(movie => movie._id === id).awards);
        })
        .catch((error) => console.log(error));
    }, [])

    return(
        <div>
            <ul>
                <h1>Premios y Nominaciones</h1>
                <Awards 
                    Wins={awards.wins} 
                    Nominations={awards.nominations}
                    Text={awards.text}
                    />
            </ul>
        </div>
    )
}

export default AwardsPage;