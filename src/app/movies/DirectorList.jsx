
export default function ItemList({items}) {
    if(!items){
        return <div>Cargando items...</div>
    }
    return(
        <ul>
            {items.map(item => (
                <li>
                    <h3>Director: {item.directors}</h3>
                </li>
                ))}
        </ul>
    )
}