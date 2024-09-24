"use client";
// import "../../Movie.css";

function MovieAward(props) {
    console.log("MovieAward props:", props);
    return (
        <li >
            <div >
                <div>
                    <h2>Ganados: {props.wins}</h2>
                    <h3>Nominaciones: {props.nominations}</h3>
                    <h3>Text: {props.text}</h3>
                </div>
            </div>
        </li>
    );
}

export default MovieAward;