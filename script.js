document.getElementById('searchButton').addEventListener(
    'click',buscarPeliculas
)

let api_key='d8af0c85b7cb5a0845b6ccfb8417bbab'
let urlBase='https://api.themoviedb.org/3/search/movie'
let urlImage='https://image.tmdb.org/t/p/w500'

let resultConteiner=document.getElementById('results')
    resultConteiner.innerHTML=''

function buscarPeliculas(){
    resultConteiner.innerHTML='Cargando...'
    let searchInput=document.getElementById('searchInput').value

    fetch(`${urlBase}?query=${searchInput}&api_key=${api_key}`)
    .then(response => response.json())
    .then(response => displayMovies(response.results))
}
function displayMovies(movies){    
    resultConteiner.innerHTML=''
    if(movies.length === 0){
        resultConteiner.innerHTML='<p>No se encontraron resultados para tu busqueda</p>'
        return
    }
    movies.forEach(movie => {
        let movieDiv=document.createElement('div')
        movieDiv.classList.add('movie')

        let titulo=document.createElement('h2')
        titulo.textContent=movie.title
        
        let releaseDate=document.createElement('p')
        releaseDate.textContent='La fecha de lanzamiento es: '+movie.release_date
        
        let overview=document.createElement('p')
        overview.textContent=movie.overview

        let path1=urlImage+movie.poster_path
        let poster=document.createElement('img')
        poster.src=path1

        movieDiv.appendChild(poster)
        movieDiv.appendChild(titulo)
        movieDiv.appendChild(releaseDate)
        movieDiv.appendChild(overview)

        resultConteiner.appendChild(movieDiv)
    });
}