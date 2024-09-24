import { ListaDetalles } from "./detalles";
export default function DetallesPage({ params }){
    const {id} = params;
    return(
        <ListaDetalles id = {id}/>
    )
    
}