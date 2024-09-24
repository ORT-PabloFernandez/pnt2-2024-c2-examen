export default function MovieDetails (props) {
    return(
        <div>
            <h3>Directores</h3>
            <p>{props.directores}</p>
            <h3>Reparto</h3>
            <p>{props.reparto}</p>
            <h3>Resumen</h3>
            <p>{props.resumen}</p>
        </div>
    );
}