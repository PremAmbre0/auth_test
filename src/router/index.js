import Vue from 'vue'
import VueRouter from 'vue-router'
import LogIn from "../pages/LogIn.vue"
import SignIn from "../pages/SignIn.vue"

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/signin', component: SignIn },
  { path: '/login', component: LogIn },
]

const router = new VueRouter({
  routes
})

export default router
