import { getComments } from "./endPointAPI";

const commentCounter = async (id) => {
  
  return await getComments(id).then((comments) => comments.length);
  
};

export {
    commentCounter
};

