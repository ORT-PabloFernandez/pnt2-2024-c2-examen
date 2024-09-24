'use client'
import React from 'react'

export default function Premios() {

    const movie = JSON.parse(localStorage.getItem("movie"))

    return (
        <div className='space-y-4'>
            <section className='flex flex-col gap-4'>
                <h2 className='text-xl'>Premios</h2>
                <ul>
                    <li>Ganados: {movie.awards.wins}</li>
                    <li>Nominados: {movie.awards.nominations}</li>
                </ul>
            </section>
        </div>
    )
}