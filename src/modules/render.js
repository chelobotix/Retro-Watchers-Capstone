import heart from '../assets/images/heart.png';
import moreInfo from '../assets/images/more-info.png';
import { getLike, getMovieList, setLike } from './endPointAPI.js';

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

const renderMovie = (movieList) => {
  document.querySelector("section.movie");
  let aux = "";
  movieList.forEach((movie) => {
    aux += `<div class="movie" >
            <img class="movie" src="https://image.tmdb.org/t/p/w300/${movie.poster_path}" alt="">
            <div class="button-container">
              <img class="btn-more-info" src="${moreInfo}" alt="">
              <p class="like-counter" id="counter${movie.id}">0</p>
              <img class="btn-like" id="like${movie.id}" src="${heart}" alt="">
            </div>
            <button onclick="commentPupupHandler(${movie.id})">comments</button>
          </div>`;
  });
  getLike().then((response) => {
    response.forEach((like) => {
      document.querySelector(`#counter${like.item_id}`).textContent = like.likes;
    });
  });
  document.querySelector('section.movie').innerHTML = aux;
  addLike();
};

const renderMovieList = () => {
  getMovieList().then((response) => {
    renderMovie(response.items);
  });
};

window.commentPupupHandler = async (id) => {
  document.getElementById("popup").style.display = "block";
  
  getSingleMovie(id).then((data) => {
    document.getElementById("popup-details").innerHTML = `
    <button class="close-popup-btn" onclick="closePopup()">x</button>
    <div class="popup-contents">
      <div class="popup-comment">
        <img class="popup-img" src="https://image.tmdb.org/t/p/w300/${data.poster_path}" alt="">
        <p class="title">${data.title}</p>
        <div class="more-info">
          <p>popularity : ${data.popularity}</p>
          <p>language: ${data.original_language}</p>
        </div>
      </div>
    </div>`;
  });
};

window.closePopup = () => {
  document.getElementById("popup").style.display = "none";
};

export default renderMovieList;
