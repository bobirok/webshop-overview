import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../components/cards/Product.vue'
import Shop from '@/views/Shop.vue'
import AuthenticationForm from '@/views/AuthenticationForm.vue'
import Account from '@/views/Account.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }, 
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/login',
    name: 'Login',
    component: AuthenticationForm
  },
  {
    path: '/me',
    name: 'Account',
    component: Account
  },
  {
    path: '/*',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
