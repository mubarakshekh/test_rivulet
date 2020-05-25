import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Login from "./pages/login";
import AllPosts from "./pages/posts";

Vue.config.productionTip = false
Vue.use(VueRouter)

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
    beforeEnter: ((to, from, next) => {



      const id = to.params.id || from.params.id
      if (localStorage.getItem(id)) {

        next()
      }
      else {
        next({ name: 'Login' })
      }
    }
    )
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
})



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
