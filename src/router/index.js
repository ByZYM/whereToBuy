import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Register from '@/components/Register'
import MainPage from '@/components/MainPage'
import SearchPage from '@/components/SearchPage'
import SearchDetail from '@/components/SearchDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/mainPage',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/searchPage',
      name: 'SearchPage',
      component: SearchPage
    },
    {
      path: '/searchDetail',
      name: 'SearchDetail',
      component: SearchDetail
    }
  ]
})
