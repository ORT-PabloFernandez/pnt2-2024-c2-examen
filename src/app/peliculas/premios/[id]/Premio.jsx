export default function Premios(props) {
  return (
    <li>
      <h1>Awards</h1>
      <h2> Wins: {props.awards.wins} </h2>
      <h2> Nominations: {props.awards.nominations}</h2>
      <h3> {props.awards.text}</h3>
    </li>
  );
}
