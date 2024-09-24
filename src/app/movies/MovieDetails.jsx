"use client"

export default function MovieDetails({Movie}){
    if(!Movie){
        return <div>Cargando datos de la pelicula...</div>
    }

    return (
        <li style={{
            border: "1px solid #ddd",
            padding: "16px",
            borderRadius: "8px",
            backgroundColor: "#f0f0f0",
        }}>
            <div>
                <img src={Movie.poster} alt={Movie.title}/>
            </div>
            <div>
                <h1>Titulo: {Movie.title}</h1>
                <h3>Argumento: {Movie.fullplot}</h3>
            </div>
            <div>
                <Link href={`/movies/${movie.id}`}>
                    <button style={{
                        padding: "10px 20px",
                        backgroundColor: "ActiveBorder",
                        color:"#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor:"pointer"
                    }}> Ver más...</button>
                </Link>
            </div>
        </li>
    );
}