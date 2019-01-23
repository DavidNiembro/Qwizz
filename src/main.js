// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import login from './components/Auth/login'
import register from './components/Auth/register'
import index from './components/index'
import quizz from './components/Quizz/index'
import results from './components/Quizz/results'
import store from './store/store'
Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [   
    {path: '/login', component: login},
    {path: '/register', component: register},
    {path: '/', component: index},
    {path: '/:id', component: quizz},
    {path: '/:id/results', component: results, props: true},
]

const router = new VueRouter({
    routes,
    mode:'history'
})


new Vue({
    router,
    store,
}).$mount('#app');