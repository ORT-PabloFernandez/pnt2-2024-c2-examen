import { useRouter } from "next/navigation";

export default function Movie(props) {
    const router = useRouter();

    const details = () => {
        router.push(`movies/${props.id}?pageSize=30&page=${props.page}`)
    }

    const handleNominations = () => {
        router.push(`movies/awards/${props.id}?pageSize=30&page=${props.page}`)
    }

    return (
        <li>
            <div onClick={details} style={{ cursor: "pointer" }}>
                <img src={props.poster}></img>
                <p>Title: {props.title}</p>
                <p>{props.fullplot}</p>
            </div>
            <button onClick={handleNominations}>Movie awards</button>
            <br />
        </li>
    )
}