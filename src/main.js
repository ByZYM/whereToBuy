// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/bootstrap/js/jquery.slim.min.js'
import './assets/bootstrap/css/bootstrap.css'
import './assets/bootstrap/js/bootstrap.js'
import VueResource from 'vue-resource'

import VueRouter from 'vue-router'
import Router from 'vue-router'

Vue.use(Router)
Vue.use(VueRouter)

Vue.use(VueResource)
Vue.config.productionTip = false
Vue.prototype.ip = 'http://39.108.70.119:8080'
var config = new Vue({
  data:{
    user:{}
  },
})

Vue.prototype.config=config;
/* eslint-disable no-new */
var vue = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
