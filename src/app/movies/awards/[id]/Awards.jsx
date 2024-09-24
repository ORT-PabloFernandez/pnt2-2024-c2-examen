"use client"

function Awards(props) {
    return(
        <li>
            <div>                    
                <h2>Premios: {props.Wins}</h2>
                <h2>Nominaciones: {props.Nominations}</h2>
                <h2>Texto: {props.Text}</h2>
            </div>
        </li>
    )
}

export default Awards;