'use client'

function Premio(props) {
    return(
        <div>
            <h1>Premios</h1>
            <div>
                <h2>{props.awards}</h2>
                <h3>{props.nominations}</h3>
            </div>
        </div>
    )
}

export default Premio;