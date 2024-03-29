import heart from '../assets/images/heart.png';
import moreInfo from '../assets/images/more-info.png';
import {
  getLike,
  getMovieList,
  getSingleMovie, setLike,
} from './endPointAPI.js';
import { commentPupupHandler } from './popup-comments.js';
import getMovieCounter from './movieCounter.js';

const updateLike = (movieId) => {
  getLike().then((response) => {
    response.forEach((like) => {
      if (like.item_id === movieId) {
        document.querySelector(`#counter${movieId}`).textContent = like.likes;
      }
    });
  });
};

const addLike = () => {
  document.querySelectorAll('.btn-like').forEach((movie) => {
    movie.addEventListener('click', () => {
      const movieId = movie.id.slice(4);
      setLike(movieId).then(() => {
        updateLike(movieId);
      });
    });
  });
};

const renderLikes = () => {
  getLike().then((response) => {
    document.querySelectorAll('.btn-like').forEach((btnLike) => {
      response.forEach((like) => {
        if (btnLike.id.slice(4) === like.item_id) {
          document.querySelector(`#counter${like.item_id}`).textContent = like.likes;
        }
      });
    });
  });
};

const randomMovie = () => {
  document.querySelector('#randomMovie').addEventListener('click', (e) => {
    e.preventDefault();
    getMovieList().then((response) => {
      const random = Math.floor(Math.random() * response.items.length);
      document.querySelector('section.movie').innerHTML = '';
      document.querySelector('section.movie').innerHTML = `<div class="movie">
            <img class="movie" src="https://image.tmdb.org/t/p/w300/${response.items[random].poster_path}" alt="">
            <div class="button-container">
              <img class="btn-more-info" id="${response.items[random].id}" src="${moreInfo}" alt="">
              <p class="like-counter" id="counter${response.items[random].id}">0</p>
              <img class="btn-like" id="like${response.items[random].id}" src="${heart}" alt="">
            </div>
          </div>`;
      document.querySelector('h1').textContent = '📽️ 1 Random Movies Generated 😁';
    });
  });
};

const renderMovie = async (movieList, category = 0) => {
  const sectionMovie = document.querySelector('section.movie');
  let aux = '';
  let categoryArray = movieList;
  category = parseInt(category, 10);
  sectionMovie.innerHTML = '';
  if (category !== 0) {
    categoryArray = movieList.filter((movie) => movie.genre_ids.includes(category));
  }
  categoryArray.forEach((movie) => {
    aux += `<div class="movie">
            <img class="movie" src="https://image.tmdb.org/t/p/w300/${movie.poster_path}" alt="">
            <div class="button-container">
              <img class="btn-more-info" id="${movie.id}" src="${moreInfo}" alt="">
              <p class="like-counter" id="counter${movie.id}">0</p>
              <img class="btn-like" id="like${movie.id}" src="${heart}" alt="">
            </div>
          </div>`;
  });
  renderLikes();
  sectionMovie.innerHTML = aux;
  addLike();
  const counter = await (getMovieCounter(category));
  document.querySelector('h1').textContent = `📽️ ${counter} Retro Movies Found 😁`;
  randomMovie();

  document.querySelectorAll('.btn-more-info').forEach((movie) => {
    document.getElementById('popup').style.display = 'none';
    movie.addEventListener('click', () => {
      getSingleMovie(movie.id).then((data) => {
        commentPupupHandler(data);
      });
    });
  });
};

const sortByCategory = () => {
  const formSearch = document.querySelector('form.search');
  formSearch.addEventListener('submit', (e) => {
    e.preventDefault();
    getMovieList().then((response) => {
      renderMovie(response.items, formSearch.elements.selectCategory.value);
    });
  });
};

const renderMovieList = () => {
  getMovieList().then((response) => {
    renderMovie(response.items);
    sortByCategory();
  });
};

export default renderMovieList;
