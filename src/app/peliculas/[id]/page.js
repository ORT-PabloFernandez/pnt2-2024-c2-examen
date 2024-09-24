'use client'
import React from 'react'

export default function Peliculas() {

  const movie = JSON.parse(localStorage.getItem("movie"))

  return (
    <div className='space-y-4'>
      <section className='flex flex-col gap-4'>
        <h2 className='text-xl'>Resumen</h2>
        <p>{movie.plot}</p>
        <h2 className='text-xl'>Director/es</h2>
        <ul>
          {movie.directors.map((director, index) => (
            <li key={index}>{director}</li>
          ))}
        </ul>
        <h2 className='text-xl'>Actor/es</h2>
        <ul>
          {movie.cast.map((actor, index) => (
            <li key={index}>{actor}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}