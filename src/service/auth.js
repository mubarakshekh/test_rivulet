import axios from "axios";
// After reading documentation, I came to know there is a method to validate user based on his id but not based on his email id. Hence to validate user based on 
// his email id or user id, we are retrieving all user information first and checking whether user id or user email present in that response or not.
// if present then valid otherwise not valid
async function login(input) {
  let url = `https://jsonplaceholder.typicode.com/users`;
  const response = await axios.get(url)
  const res = response.data.filter(x => x.id == input || x.email == input)
  return res;
}
export default userService;
export const userService = {
  login,
};