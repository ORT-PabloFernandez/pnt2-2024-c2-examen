import Director from "./Director";

const DirectorsList = (props) => {
    return (
        <ul>
            <h1>Directores</h1>
            {props.directorsList.map((director) => (
                <Director 
                    Director={director}
                />
            ))}
        </ul>
    );
};


export default DirectorsList;