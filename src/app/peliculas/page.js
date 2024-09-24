"use client"
import { ListaPeliculas } from "./listaPeliculas.jsx";
// import { useSearchParams } from "next/navigation.js";

export default function PeliculasPage(params){
    // const searchParams = useSearchParams();
    // const currentPage = Number(searchParams.get('page') || 1);
    return(
        <div>
            <ListaPeliculas />
        </div>
    )
}