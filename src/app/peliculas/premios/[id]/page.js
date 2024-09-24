import { PremiosPage } from "./premios";
export default function AwardsPage({ params }){
    const{id} = params;
    return(
        <div>
            <PremiosPage id = {id} />
        </div>
    )
}