const PAGE_SIZE=30;
// `https://mflixbackend.azurewebsites.net/api/movies?${PAGE_SIZE}&page=${currentPage
export async function fetchPeliculas() {
    try{
        const res = await fetch(
           "https://mflixbackend.azurewebsites.net/api/movies?pageSize=30&page=1"
        )
        if(!res.ok) throw new Error("Problema de conexion");
        const data = await res.json();
        if(!data) throw new Error ("Not data found")
        return data;
    }catch(error){
        console.error("failed to fetch data", error.message);
        //throw new Error('Failed to fetch data');
    }
}
// export async function fetchCast(id) {
//     try{
//         const res = await fetch(
//             "https://mflixbackend.azurewebsites.net/api/movies?pageSize=30&page=1"
//         )
//         if(!res.ok) throw new Error("Problema de conexion");
//         const data = await res.json();
//         if(!data) throw new Error ("Not data found")
//         const cast = data.find((pelicula) => pelicula._id === id).cast;
//         return cast;
//     }catch(error){
//         console.error("failed to fetch data", error.message);
//         throw new Error('Failed to fetch data');
//     }
// }
// export async function fetchDirectors(id) {
//     try{
//         const res = await fetch(
//             "https://mflixbackend.azurewebsites.net/api/movies?pageSize=30&page=1"
//         )
//         if(!res.ok) throw new Error("Problema de conexion");
//         const data = await res.json();
//         if(!data) throw new Error ("Not data found")
//         const directors = data.find((pelicula) => pelicula._id === id).directors;
//         return directors;
//     }catch(error){
//         console.error("failed to fetch data", error.message);
//         throw new Error('Failed to fetch data');
//     }
// }
export async function fetchPelicula(id) {
    try{
        const res = await fetch(
           // `https://mflixbackend.azurewebsites.net/api/movies?${PAGE_SIZE}&page=${currentPage}`
            "https://mflixbackend.azurewebsites.net/api/movies?pageSize=30&page=1"
        )
        if(!res.ok) throw new Error("Problema de conexion");
        const data = await res.json();
        if(!data) throw new Error ("Not data found")
        const pelicula = data.find((pelicula) => pelicula._id === id);
        return pelicula;
    }catch(error){
        console.error("failed to fetch data", error.message);
    }
}
export async function fetchPremios(id) {
    try{
        const res = await fetch(
           // `https://mflixbackend.azurewebsites.net/api/movies?${PAGE_SIZE}&page=${currentPage}`
            "https://mflixbackend.azurewebsites.net/api/movies?pageSize=30&page=1"
        )
        if(!res.ok) throw new Error("Problema de conexion");
        const data = await res.json();
        if(!data) throw new Error ("Not data found")
        const premios = data.find((pelicula) => pelicula._id === id).awards;
        console.log(premios);
        return premios;
    }catch(error){
        console.error("failed to fetch data", error.message);
    }
}
