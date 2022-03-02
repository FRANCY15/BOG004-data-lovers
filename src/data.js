

export const filtrarPeliculas = (peliculas, datosBusqueda) => {
    let resultadoFiltro = peliculas.filter(pelicula => {
        const {title} = pelicula;
        const datosBusquedaLowerCase = datosBusqueda.toLowerCase();
        return title.toLowerCase().includes(datosBusquedaLowerCase)
    })
    return resultadoFiltro;
}

export const organizarPeliculasAZ = (peliculas) => {
    let resultadoOrganizadoAZ = peliculas.sort(function(a,b){
    if (b.title < a.title) return 1;
    if (b.title > a.title) return  -1;
    else return 0 })
    return resultadoOrganizadoAZ;
}

export const peliculasxAño = (peliculas) => {
    let resultadoOrgannizadoAño = peliculas.sort((a, b) => {
        if (a.release_date > b.release_date) {
        return 1;
        }
        return -1;
    })
    return resultadoOrgannizadoAño;
}

export const filtrarPeliculasScore = (peliculas) => {
    let resultadoTheBestFilms = peliculas.filter(pelicula => {
        const {rt_score} = pelicula;
        return rt_score > 95;
    })
    return resultadoTheBestFilms;
}