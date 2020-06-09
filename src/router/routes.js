import Login from "../pages/login";
import AllPosts from "../pages/posts";
const routes = [
  {
    path: '/',
    component: Login,
    name: 'Login'
  },
  {
    path: '/allposts/:id',
    component: AllPosts,
    name: 'AllPosts',
    beforeEnter: guard
  }
]
function guard(to, from, next) {
  const id = to.params.id || from.params.id
  if (localStorage.getItem(id)) {
    next()
  }
  else {
    next('/')
  }
}
export default routes;
