const searchBtn = document.getElementById('search__btn');
const movieList = document.getElementById('movies');


searchBtn.addEventListener('click', getMovieList);

async function getMovieList(){
    let searchInputTxt = document.getElementById ('search__input').value.trim();
    const movies = await fetch(`https://www.omdbapi.com/?apikey=4d79dfe6&s=${searchInputTxt}`);
    const moviesData = await movies.json();
    console.log(moviesData)
    movieList.innerHTML = moviesData.search?.map(movie => getMovieList(movie)).join('')


        function getMovieList(movie) {
                   return `<div class="movie" id="movies" data-id = ${movie.imdbID}>
                        <figure class="movie__img--wrapper">
                            <img src="${movie.Poster}" class="movie__img">
                        </figure>
                        <div class="movie__title">
                            ${movie.Title}
                        </div>
                        <div class="movie__year">
                            <p>${movie.Year}</p>
                        </div>
                    </div>`.join('');
        
        }
}

getMovieList();

console.log(movieList)