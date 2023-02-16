
const commentPupupHandler = async (data) => {
  document.getElementById("popup").style.display = "block";
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
          <div class="display-comments">
            <h3>Comments(2)</h3>
            <div class="comments"></div>
          </div>
        </div>
      </div>`;
};

window.closePopup = () => {
  document.getElementById("popup").style.display = "none";
};

const displayComment = (comments) => {
  let aux = '';
  comments.forEach(comment => {
    aux += `
      <p>${comment.creation_date} ${comment.username} : ${comment.comment}</p>
    `
  });
  document.querySelector('.comments').innerHTML = aux;
};

export { commentPupupHandler, displayComment };

