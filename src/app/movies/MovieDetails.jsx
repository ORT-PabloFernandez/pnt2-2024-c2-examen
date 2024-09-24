 function MovieDatails ({Movie}){
    return(
        <div>
        <h1>Detalles de la pelicula</h1>
        <h2>Reparto : {Movie.cast} </h2>
        <h2>Directores : {Movie.directors} </h2>
        <h2>Resumen : {Movie.fullplot}</h2> 
        </div>
    )
    
}