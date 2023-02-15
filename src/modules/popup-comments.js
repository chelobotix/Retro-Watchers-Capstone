import { getSingleMovie } from "./endPointAPI";

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
  