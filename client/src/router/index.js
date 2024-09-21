import { createRouter, createWebHistory } from 'vue-router'
//import Home from '../views/Home.vue'
import LandingPage from '../components/LandingPage.vue'
import LoginPage from '../components/LoginPage.vue'
//import Register from '../views/Register.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: LandingPage
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  }
//   {
//     path: '/register',
//     name: 'Register',
//     component: Register
//   }
]

const router = createRouter({
  history: createWebHistory(),  // Call the function here
  routes
})

export default router