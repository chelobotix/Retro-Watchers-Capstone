import getMovieCounter from './movieCounter.js';

describe('Movie Counter', () => {
  test('Counter All Movies', () => {
    getMovieCounter(0).then((response) => {
      expect(response).toBe(37);
    });
  });

  test('Counter Comedy Movies', () => {
    getMovieCounter(35).then((response) => {
      expect(response).toBe(13);
    });
  });

  test('Counter Romance Movies', () => {
    getMovieCounter(10749).then((response) => {
      expect(response).toBe(5);
    });
  });
});
