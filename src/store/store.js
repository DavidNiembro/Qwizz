import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

// Accesible with $store.state.count


export default new Vuex.Store({
    state: {
        results : [],
        quizzes : [],
        quizz : [],
        question: null,
        token: null
      },
      getters : {
        RESULTS : state => {
            return state.results;
        },
        QUIZZES : state => {
            return state.quizzes;
        },
        QUIZZ : state => {
            return state.quizz;
        },
        TOKEN : state => {
            return state.token;
        }
      },
      mutations: {
        SET_RESULTS : (state,payload) => {
            state.results = payload
        },
        ADD_RESULTS : (state,payload) => {
            state.results.push(payload)
        },
        SET_QUIZZES : (state,payload) => {
            state.quizzes = payload
        },
        ADD_QUIZZES : (state,payload) => {
            state.quizzes.push(payload)
        },
        SET_QUIZZ : (state,payload) => {
            state.quizz = payload
        },
        ADD_QUIZZ : (state,payload) => {
            state.quizz.push(payload)
        },
        SET_TOKEN : (state,payload) => {
            state.token = payload
        },
      },
      actions:{
        GET_QUIZZES: async (context,payload) => {
            let token = localStorage.getItem('token');
            token = JSON.parse(token);
            let { data } = await Axios.get('http://awa-quizz.herokuapp.com/api/quizzes',{headers:{"quizz-token": token}})
            context.commit('SET_QUIZZES',data)
         },
        ADD_RESULT : async (context,payload) => {
            context.commit('ADD_RESULTS',payload)
        },
        GET_QUIZZ : async (context,quizz) =>{
            let token = localStorage.getItem('token');
            token = JSON.parse(token);
            let { data } = await Axios.get('http://awa-quizz.herokuapp.com/api/quizzes/'+quizz.id,{headers:{"quizz-token": token}})
            context.commit('SET_QUIZZ',data)
        },
        LOGIN : async (context,user) =>{

            let data = await Axios.post('http://awa-quizz.herokuapp.com/api/login',
            {
                username: user.username,
                password: user.password
            })
            localStorage.setItem('token', JSON.stringify(data.data.token));
        },
        REGISTER : async (context,user) =>{

            let data = await Axios.post('http://awa-quizz.herokuapp.com/api/register',
            {
                username: user.username,
                password: user.password
            })
            localStorage.setItem('token', JSON.stringify(data.data.token));
        },
        LOGOUT : async (context,user) =>{
            localStorage.removeItem('token');
        }
     },
});

