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
            localStorage.setItem('token', JSON.stringify('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Imd1ZXN0IiwicGFzc3dvcmQiOiIkcGJrZGYyLXNoYTI1NiQyMDAwMCRjNjRWd3RnN0IuQThKeVJrN1AzL1h3JG9BRDloUnVEQTVkWVpKR1Y2cDNpdDBzYVFqdlFBemFZbi9wNW1kSGRDbDQifQ.P-KfTO8nq5oQNC_bIAY5VKOeNLyNbGE-gGrf0oIKQjc'));
            let { data } = await Axios.post('http://awa-quizz.herokuapp.com/api/login',
            {
                username: user.username,
                password: user.password
                
            }).then(function (response) {
                console.log(response);
            })
        },
        LOGOUT : async (context,user) =>{
            localStorage.removeItem('token');
        }
     },
});

