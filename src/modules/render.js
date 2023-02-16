import heart from "../assets/images/heart.png";
import moreInfo from "../assets/images/more-info.png";
import {
  getLike,
  getMovieList, getSingleMovie, setLike
} from "./endPointAPI.js";
import commentPupupHandler from './popup-comments';

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
  document.querySelectorAll(".btn-like").forEach((movie) => {
    movie.addEventListener("click", () => {
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
    aux += `<div class="movie">
            <img class="movie" src="https://image.tmdb.org/t/p/w300/${movie.poster_path}" alt="">
            <div class="button-container">
              <img class="btn-more-info" id="${movie.id}" src="${moreInfo}" alt="">
              <p class="like-counter" id="counter${movie.id}">0</p>
              <img class="btn-like" id="like${movie.id}" src="${heart}" alt="">
            </div>
          </div>`;
  });

  getLike().then((response) => {
    response.forEach((like) => {
      document.querySelector(`#counter${like.item_id}`).textContent =
        like.likes;
    });
  });

  document.querySelector("section.movie").innerHTML = aux;
  addLike();
  
  document.querySelectorAll(".btn-more-info").forEach((movie) => {
    document.getElementById("popup").style.display = "none";
    movie.addEventListener("click", () => {
      getSingleMovie(movie.id).then((data) => {
        commentPupupHandler(data);
      });
    });
  });
};

const renderMovieList = () => {
  getMovieList().then((response) => {
    renderMovie(response.items);
  });
};

export default renderMovieList;
