import { getMovieList } from './endPointAPI.js';

const getMovieCounter = async (category) => {
  const movieList = await getMovieList();
  let counter = movieList.items;
  if (category !== 0) {
    counter = movieList.items.filter((movie) => movie.genre_ids.includes(category));
  }
  return counter.length;
};

export default getMovieCounter;
