import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Register from '@/components/Register'
import MainPage from '@/components/MainPage'
import MapNavi from '@/components/Map/MapNavi'
import SearchPage from '@/components/SearchPage'
import SearchDetail from '@/components/SearchDetail'
import VueRouter from 'vue-router'
import SellerMainPage from '@/components/Seller/SellerMainPage'
import MyShop from '@/components/Seller/MyShop'
import AddGood from '@/components/Seller/AddGood'
Vue.use(VueRouter)
//
// const routes = [
//   {
//     path: '/index',
//     component: require('../components/Index'),
//     meta: {
//       requiresAuth: true
//     }
//   },
// ]

const router = new VueRouter({
  // routes: routes
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      meta : {
        requiresAuth: true,
      }
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
      component: MainPage,
      meta : {
        requiresAuth: true,
      }
    },
    {
      path: '/Map/MapNavi',
      name: 'MapNavi',
      component: MapNavi,
      meta : {
        requiresAuth: true,
      }
    },
    {
      path: '/searchPage',
      name: 'SearchPage',
      component: SearchPage,
      meta : {
        requiresAuth: true,
      }
    },
    {
      path: '/Seller/MainPage',
      name: 'SellerMainPage',
      component: SellerMainPage
    }
    ,
    {
      path: '/Seller/MyShop',
      name: 'MyShop',
      component: MyShop
    }
    ,
    {
      path: '/Seller/AddGood',
      name: 'AddGood',
      component: AddGood
    }
    ,
    {
      path: '/searchDetail',
      name: 'SearchDetail',
      component: SearchDetail,
      meta : {
        requiresAuth: true,
      }
    }
  ]
})
// alert(111);
router.beforeEach((to, from, next) => {
  // alert(123);
  let token = window.localStorage.getItem('token')
  if (to.matched.some(record => record.meta.requiresAuth) && (!token || token === null)) {
    // alert(13);
    // alert(to.fullPath);
    next({
      path: '/login',
      query: { redirect: to.fullPath }
      // router.push({path:"/login"});
      // router.push();
    })
  } else {

    next()
  }
})

export default router;


// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     },
//     {
//       path: '/index',
//       name: 'Index',
//       component: Index,
//       meta : {
//         requiresAuth: true,
//       }
//     },
//     {
//       path: '/login',
//       name: 'Login',
//       component: Login
//     },
//     {
//       path: '/register',
//       name: 'Register',
//       component: Register
//     },
//     {
//       path: '/mainPage',
//       name: 'MainPage',
//       component: MainPage
//     },
//     {
//       path: '/Map/MapNavi',
//       name: 'MapNavi',
//       component: MapNavi
//     },
//     {
//       path: '/searchPage',
//       name: 'SearchPage',
//       component: SearchPage
//     },
//     {
//       path: '/searchDetail',
//       name: 'SearchDetail',
//       component: SearchDetail
//     }
//   ]
// })
