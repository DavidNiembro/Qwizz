// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import login from './components/login'
import register from './components/register'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [   
    {path: '/login', component: login},
    {path: '/register', component: register},
]

const router = new VueRouter({
    routes,
    mode:'history'
})

new Vue({
  router
}).$mount('#app');