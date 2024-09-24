'use client';

import { useState,useEffect } from "react";
import PremioList from "./PremioList";

const PremiosPage = ({params}) => {
    const [premios, setPremios] = useState({peliculas: []});
    const {id} = params;
    const [page,setPage] = useState(1);
    const [pageSize] = useState(30);

    useEffect(() =>{
        fetch(`https://mflixbackend.azurewebsites.net/api/movies?pageSize=${pageSize}&page=${page}`)
        .then((response) => response.json())
        .then((data) => { 
            const premioData = data.find(premio => premio._id === id);
            if(premioData) {
                setPremios(premioData.premios)
            }
        }).catch((error) => console.log(error));
    },[id,page,pageSize]);

    return(
        <div>
            <PremioList premios = {premios} />
        </div>
    )
}
export default PremiosPage;