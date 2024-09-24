'use client';

function Detalle(props){
    return(
        <div>
                <br></br>
                <h1 style={{fontWeight: 'bold'}}>Detalles de la Pelicula</h1>
                <h4>Reparto: {props.detalle.cast}</h4>
                <h3>Directores: {props.detalle.directors}</h3>
                <p>Resumen: {props.detalle.plot}</p>
        </div>
    )
}

export default Detalle;