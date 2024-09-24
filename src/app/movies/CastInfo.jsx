export default function CastInfo({ cast }) {
  return (
    <div className="cast-info">
      <h2>Cast</h2>
      <ul>
        {cast.map(cast => (
          <li>{cast}</li>
        ))}
      </ul>
    </div>
  );
}
