import "./styles.css";
import Link from "next/link";

export default function MovieListItem({
  id,
  poster,
  title,
  fullplot,
}) {
  return (
    <li className="movie-list-item">
      <img src={poster} alt={title} className="movie-poster" />
      <div>
        <Link href={`./movies/${id}`}>
          <h1 className="movie-list-title">{title}</h1>
        </Link>
        <p>{fullplot}</p>
      </div>
    </li>
  );
}
