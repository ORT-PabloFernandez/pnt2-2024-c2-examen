import { fetchPremios } from "../../data/data";
import "../../global.css";
export async function PremiosPage(params) {
    const premios = await fetchPremios(params.id);
    return(
        <div className= "item__content">
            <div className="item__info">
            <h2>Nominaciones : {premios.nominations}</h2>
            <h2>Wins : {premios.wins}</h2>
            </div>
        </div>
    )
}