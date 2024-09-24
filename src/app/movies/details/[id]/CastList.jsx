import Cast from "./Cast";

const CastList = (props) => {
    return (
        <ul>
            <h1>Reparto</h1>
            {props.castList.map((castmember) => (
                <Cast 
                   CastMember={castmember}
                />
            ))}
        </ul>
    );
};


export default CastList;