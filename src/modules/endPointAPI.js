import apiKey from './apiKey.js';

const getMovieList = async () => {
  const url = `https://api.themoviedb.org/3/list/8240326?api_key=${apiKey}&language=en-US`;
  const response = await fetch(url);
  const movieList = await response.json();
  return movieList;
};

export default getMovieList;
