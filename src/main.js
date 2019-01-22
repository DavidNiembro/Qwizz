// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import login from './components/Auth/login'
import register from './components/Auth/register'
import index from './components/index'
import quizz from './components/Quizz/index'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [   
    {path: '/login', component: login},
    {path: '/register', component: register},
    {path: '/', component: index},
    {path: '/:id', component: quizz},
]

const router = new VueRouter({
    routes,
    mode:'history'
})

new Vue({
  router,
}).$mount('#app');