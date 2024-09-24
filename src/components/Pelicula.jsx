"use client"
import React from 'react'

export default function (props) {
  
    const {poster, title, fullPlot, id} = props;

    return (
    <div>
        <img src={poster}></img>
        <h2>Titulo: {title}</h2>
        <p>Descripcion: {fullPlot}</p>
        <a href={"premiosPelicula/" + id}>Ver sus premios y nominaciones</a>
    </div>
  )
}
