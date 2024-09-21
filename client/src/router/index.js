import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../components/LoginPage.vue'
import LandingPage from '../components/LandingPage.vue'
import RegistrationPage from '../components/RegistrationPage.vue'
import DashboardPage from '@/components/DashboardPage.vue'
import TripPlanning from '@/components/TripPlanning.vue'
import HerpedexPage from '@/components/HerpedexPage.vue'
import AccountPage from '@/components/AccountPage.vue'
import StartTrip from '@/components/StartTrip.vue'
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
  },
  {
    path: '/register',
    name: 'Register',
    component: RegistrationPage
  },
  {
    path: '/dashboard',
    name: 'DashBoardPage',
    component: DashboardPage
  },
  {
    path: '/trip-planning',
    name: 'TripPlanning',
    component: TripPlanning
  },
  {
    path: '/herpedex',
    name: 'HerpedexPage',
    component: HerpedexPage
  },
  {
    path: '/account',
    name: 'AccountPage',
    component: AccountPage
  },
  {
    path: '/start-trip',
    name: 'StartTrip',
    component: StartTrip        
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router