export default function DirectorInfo({ director }){
    const title = director.length === 1 ? "Director" : "Directors"
    
    return(
        <div className="directo-info">
            <h2>{title}</h2>
            <ul>
                {director.map((director) => (
                    <li>{director}</li>
                ))}
            </ul>
        </div>
    )
}