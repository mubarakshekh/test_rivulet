import axios from "axios";


async function getUserPosts(userId) {
  let url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
  const response = await axios.get(url)
  return response;
}

async function addUserPosts(userId, title, body) {

  let url = `https://jsonplaceholder.typicode.com/posts`;

  const data = {
    title: title,
    body: body,
    userId: userId
  }

  let header = {
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  };
  
  const response = await axios.post(url, JSON.stringify(data), header)
  return response;
}
async function addPostComment(postId, comment) {
  let url = `https://jsonplaceholder.typicode.com/comments`;

  const data = {
    postId: postId,
    comment: comment,
  }

  let header = {
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  };
  const response = await axios.post(url, JSON.stringify(data), header)
  return response;
}

export default dataService;


export const dataService = {
  getUserPosts,
  addUserPosts,
  addPostComment,

};