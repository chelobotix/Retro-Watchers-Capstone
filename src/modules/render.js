import getMovieList from './endPointAPI.js';
import moreInfo from '../assets/images/more-info.png';
import heart from '../assets/images/heart.png';

const renderMovie = (movieList) => {
  document.querySelector('section.movie');
  let aux = '';
  movieList.forEach((movie) => {
    aux += `<div class="movie">
            <img class="movie" src="https://image.tmdb.org/t/p/w300/${movie.poster_path}" alt="">
            <div class="button-container">
              <img class="btn-more-info" src="${moreInfo}" alt="">
              <img class="btn-like" src="${heart}" alt="">
            </div>
          </div>`;
  });
  document.querySelector('section.movie').innerHTML = aux;
};

const renderMovieList = () => {
  getMovieList().then((response) => {
    renderMovie(response.items);
  });
};

export default renderMovieList;
