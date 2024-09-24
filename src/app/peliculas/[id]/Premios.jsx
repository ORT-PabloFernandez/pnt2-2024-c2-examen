export default function Premios({ pelicula }) {
    return (
        <div>
            <h1>Premios y Nominaciones de {pelicula.title}</h1>
            <h2>Nominaciones:</h2>
            <p>{pelicula.awards.nominations}</p>
            <h2>Wins:</h2>
            <p>{pelicula.awards.wins}</p>
        </div>
    );
}
