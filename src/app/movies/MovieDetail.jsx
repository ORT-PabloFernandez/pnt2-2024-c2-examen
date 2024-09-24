"use client";
import Link from "next/link";
import "./Movie.css";

function MovieDetail({id, cast, directors, fplot, awards}) {
    return (
        <div className="mt-6">
            <div>
                <h2 className="text-xl font-semibold mb-2">Cast:</h2>
                <ul className="space-y-2">
                    {cast.map((actor, index) => (
                        <li key={index} className="bg-black text-white shadow rounded-xl p-5 border border-gray-700">
                            <p className="font-semibold">{actor}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2 className="text-xl font-semibold mb-2">Directors:</h2>
                <ul className="space-y-2">
                    {directors.map((director, index) => (
                        <li key={index} className="bg-black text-white shadow rounded-xl p-5 border border-gray-700">
                            <p className="font-semibold">{director}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2 className="text-xl font-semibold mb-2">Full Plot:</h2>
                <ul className="space-y-2">
                    <p className="font-semibold">{fplot}</p>
                </ul>
            </div>
            <div>
                <Link href={`./${id}/awards`}>
                    <div className='movie-item__info'>
                        <h2>Awards</h2>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default MovieDetail;