export default function AwardDetails({Awards}){

    if(!Awards){
        return <div>Cargando las nominaciones...</div>
    }
    return(
        <div style={{border: "1px solid #ddd",
            padding: "16px",
            borderRadius: "8px",
            backgroundColor: "#f0f0f0",}}>
            <div>
                <h1 style={{marginBottom: "13px"}}>
                    Nominaciones:
                </h1>
            </div>
            <div>
                <ul style={{ listStyleType: "initial", padding: 0}}>
                    {Awards.map(award =>(
                        <li style={{marginBottom:"10px"}}>
                            <h2>{award.text}</h2>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}