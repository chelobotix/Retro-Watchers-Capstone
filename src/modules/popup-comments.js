import commentCounter from './comment-counter.js';
import { getComments, getTrailer, setComments } from './endPointAPI.js';

const displayComment = async (comments) => {
  let aux = '';
  if (comments.error) {
    return [];
  }
  for (let i = 0; i < comments.length; i += 1) {
    const comment = comments[i];
    aux += `
      <div class="comment-body">
      <p class="comment-name">${comment.username}</p>
      <p class="comment-date">${comment.creation_date}</p>
      <p class="comment-text">${comment.comment}</p>
      </div>
      `;
  }

  document.querySelector('.comments').innerHTML = aux;
  return aux;
};
const displayCommentCounter = async (counter) => {
  if (counter) {
    document.querySelector(
      '.comment-counter',
    ).innerHTML = `Comments (${counter}) `;
  } else {
    document.querySelector('.comment-counter').innerHTML = 'Comments 0 ';
  }
};

const addComment = async (id) => {
  getComments(id).then((comments) => {
    displayComment(comments);
  });

  document.querySelector('#form').addEventListener('submit', async (e) => {
    const comment = document.querySelector('#comment-textarea');
    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();
    comment.focus();
    const username = document.querySelector('input[name="username').value;
    const comments = {
      item_id: id,
      username: username.toUpperCase(),
      comment: comment.value,
    };

    await setComments(comments);

    document.querySelector('input[name="username').value = '';
    document.querySelector('#comment-textarea').value = '';

    getComments(id).then((comments) => {
      displayComment(comments);
    });

    const commentItem = await commentCounter(id).then((res) => res);

    await displayCommentCounter(commentItem);
  });
};

const commentPupupHandler = async (data) => {
  const key = await getTrailer(data.id).then((data) => data.results[0].key);

  const genres = data.genres.map((gen) => gen.name);

  let aux = '';
  genres.forEach((genre) => {
    aux += `
      <p>${genre}</p>
    `;
  });

  document.getElementById('popup').style.display = 'block';
  document.querySelector('.overlay').style.display = 'block';
  document.getElementById('popup-details').innerHTML = `
      <div class="close-popup-btn">
      <button onclick="closePopup()">&#x2715</button>

      </div>
      <div class="popup-contents">
        <div class="popup-comment">
          <div class="popup-header">
            <img class="popup-img" src="https://image.tmdb.org/t/p/w300/${data.poster_path}" alt="movie image">
            <div class="popup-header-desc">
              <h2 class="title">${data.title}</h2>
              <p class="tagline">${data.tagline}</p>
              <p class="release-date">Release date: ${data.release_date}</p>
              <div class="genre"></div>
              <div class="more-info">
                <p>IMDb: <span>${data.vote_average}</span></p>
                <p>${data.vote_count} votes</p>
              </div>
            </div>
            
          </div>
          
          <p class="overview"> Movie Plot: <span>${data.overview}</span></p>
          
          <div class="iframe-video">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          
          <div class="display-comments">
            <h3 class="comment-counter"></h3>
            <div class="comments"></div>
          </div>
          
          <form class="add-comment" id="form">
            <h3>Add a comment</h3>
            <div class="form-group">
            <input type="text" placeholder="Your name" name="username" required/>
            <textarea id="comment-textarea" type="text" placeholder="Your insights" name="comment" required></textarea>
            <button class="comment-btn">Submit</button></div>
            
          </form>
        </div>
      </div>`;

  document.querySelector('.genre').innerHTML = aux;
  addComment(data.id);

  const commentItem = await commentCounter(data.id).then((res) => res);
  await displayCommentCounter(commentItem);
};

window.closePopup = () => {
  document.getElementById('popup').style.display = 'none';
  document.querySelector('.overlay').style.display = 'none';
};

export { commentPupupHandler, displayComment };
