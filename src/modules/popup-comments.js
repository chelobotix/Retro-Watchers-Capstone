import { getComments, setComments } from "./endPointAPI";

const displayComment = (comments) => {
  let aux = "";
  comments.forEach((comment) => {
    aux += `
      <p>${comment.creation_date} ${comment.username} : ${comment.comment}</p>
    `;
  });
  document.querySelector(".comments").innerHTML = aux;
};

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
          <form class="add-comment" id="form">
            <h3>Add a comment</h3>
            <input type="text" placeholder="Your name" name="username" required/>
            <input type="text" placeholder="Your insights" name="comment" required/>
            <button class="comment-btn">Submit</button>
          </form>
        </div>
      </div>`;

  addComment(data.id);
};

window.closePopup = () => {
  document.getElementById("popup").style.display = "none";
};

const addComment = async (id) => {
  getComments(id).then((comments) => {
    displayComment(comments);
  });
  document.querySelector("#form").addEventListener("submit", async (e) => {
    e.preventDefault();
    let username = document.querySelector('input[name="username').value;
    let comment = document.querySelector('input[name="comment').value;
    let comments = {
      item_id: id,
      username: username,
      comment: comment,
    };

    await setComments(comments);

    document.querySelector('input[name="username').value = "";
    document.querySelector('input[name="comment').value = "";

    getComments(id).then((comments) => {
      displayComment(comments);
    });
  });
};

export { commentPupupHandler };

