import commentCounter from './comment-counter.js';

describe('Comment Counter', () => {
  test('Comment counter for matrix movie ', () => {
    commentCounter(603).then((response) => {
      expect(response).toBe(2);
    });
  });
  test('Comment counter for The Lord of The Rings movie ', () => {
    commentCounter(122).then((response) => {
      expect(response).toBeUndefined();
    });
  });
});
