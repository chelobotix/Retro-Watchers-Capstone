import heart from "../assets/images/heart.png";
import moreInfo from "../assets/images/more-info.png";
import { getMovieList, getSingleMovie } from "./endPointAPI.js";

const renderMovie = (movieList) => {
  document.querySelector("section.movie");
  let aux = "";
  movieList.forEach((movie) => {
    aux += `<div class="movie" >
            <img class="movie" src="https://image.tmdb.org/t/p/w300/${movie.poster_path}" alt="">
            <div class="button-container">
              <img class="btn-more-info" src="${moreInfo}" alt="">
              <img class="btn-like" src="${heart}" alt="">
            </div>
            <button onclick="commentPupupHandler(${movie.id})">comments</button>
          </div>`;
  });
  document.querySelector("section.movie").innerHTML = aux;
  document.getElementById("popup").style.display = "none";
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
    <button onclick="closePopup()">x</button>
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
