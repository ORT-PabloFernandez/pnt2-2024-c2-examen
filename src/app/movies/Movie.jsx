import Link from "next/link";
import MovieAwards from "./MovieAwards.jsx"

function Movie(params){
return(
  <li> 
    <div>
        <Link href={`/movies/${params.title}`}>
        <button>
            Mas detalles.
        </button>
        <img> src={params.poster}  </img>
    </Link>
    </div>

   <div>
    <h3>Titulo : {params.title} </h3>
    <h3>Descripcion : {params.fullplot} </h3>
    <h4>
        <Link MovieAwards movieAwards = {movie} > 
        <button>
            Premios y Nominaciones.
        </button>
        </Link>
    </h4>
</div> 

</li>
)
}

export default Movie;