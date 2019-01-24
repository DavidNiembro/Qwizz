import Axios from 'axios';

state = {
    quizzes : [],
    quizz:[]
}
getters = {
    QUIZZES : state => {
        return state.quizzes;
    },
    QUIZZ : state => {
        return state.quizz;
    }
}
mutations= {
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
    }
}
actions = {
    GET_QUIZZES : async (context,payload) => {
        let { data } = await Axios.get('http://awa-quizz.herokuapp.com/api/quizzes',{headers:{"quizz-token": 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Imd1ZXN0IiwicGFzc3dvcmQiOiIkcGJrZGYyLXNoYTI1NiQyMDAwMCRjNjRWd3RnN0IuQThKeVJrN1AzL1h3JG9BRDloUnVEQTVkWVpKR1Y2cDNpdDBzYVFqdlFBemFZbi9wNW1kSGRDbDQifQ.P-KfTO8nq5oQNC_bIAY5VKOeNLyNbGE-gGrf0oIKQjc'}})
        context.commit('SET_QUIZZES',data)
    },
    GET_QUIZZ : async (context,payload) =>{
        let { data } = await Axios.get('http://awa-quizz.herokuapp.com/api/quizz/'+this.$route.params.id,{headers:{"quizz-token": 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Imd1ZXN0IiwicGFzc3dvcmQiOiIkcGJrZGYyLXNoYTI1NiQyMDAwMCRjNjRWd3RnN0IuQThKeVJrN1AzL1h3JG9BRDloUnVEQTVkWVpKR1Y2cDNpdDBzYVFqdlFBemFZbi9wNW1kSGRDbDQifQ.P-KfTO8nq5oQNC_bIAY5VKOeNLyNbGE-gGrf0oIKQjc'}})
        context.commit('SET_QUIZZ',data)
    }
}
export default {
    state,getters,mutations,actions
  }