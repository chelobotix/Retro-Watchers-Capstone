import { apiKey, siteId } from './apiKey.js';

const getMovieList = async () => {
  const url = `https://api.themoviedb.org/3/list/8240326?api_key=${apiKey}&language=en-US`;
  const response = await fetch(url);
  const movieList = await response.json();
  return movieList;
};

const getSingleMovie = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
  const response = await fetch(url);
  const singleMovie = await response.json();
  return singleMovie;
}

const getComments = async () => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${siteId}/comments?item_id=item1`;
  const response = await fetch(url);
  const comments = await response.json();
  return comments
}

const setLike = async (movieId) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${siteId}/likes/`;
  await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body:
      JSON.stringify({ item_id: movieId }),
  });
};

const getLike = async () => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${siteId}/likes/`;
  const response = await fetch(url);
  const likeCounter = await response.json();
  return likeCounter;
};


export { getMovieList, setLike, getLike, getSingleMovie, getComments };

