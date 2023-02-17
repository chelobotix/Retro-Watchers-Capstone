import { getComments } from './endPointAPI.js';

const commentCounter = async (id) => getComments(id).then((comments) => comments.length);

export default commentCounter;
