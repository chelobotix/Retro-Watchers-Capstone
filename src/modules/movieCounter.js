const getMovieCounter = (msg) => {
  const counter = document.querySelectorAll('.btn-like').length;
  document.querySelector('h1').textContent = `📽️ ${counter} ${msg} 😁`;
};

export default getMovieCounter;
