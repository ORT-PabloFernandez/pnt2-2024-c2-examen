import { fetchPelicula } from "../../data/data"
import "../../global.css";
export async function ListaDetalles(params) {
    const { id } = params;
    const pelicula = await fetchPelicula(id);
    return(
       <div>
        <li className="item">
          <div className="item__content">
              <div className="item__info">
                <h2>Director :</h2>
                <ul>
                  {
                    pelicula.directors.map((director)=>{
                      <li>{director}</li>
                    }
                    )
                  }
                </ul>
                <h2>Casting :</h2>
                <ul>
                  {
                    pelicula.cast.map((miembro)=>{
                      <li>{miembro}</li>
                    }
                    )
                  }
                </ul>
                <h3>Resumen : {pelicula.plot}</h3>
              </div>
          </div>
        </li>
       </div> 
    )
}