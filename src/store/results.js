import Axios from 'axios'

state = {
    results : []
},
getters = {
    RESULTS : state => {
        return state.results;
    }
},
mutations= {
    SET_RESULTS : (state,payload) => {
        state.results = payload
    },
    ADD_RESULTS : (state,payload) => {
        state.results.push(payload)
    }
},
actions = {
    ADD_RESULT : async (context,payload) => {
        context.commit('ADD_RESULTS',payload)
    },
    SAVE_RESULTS : async (context,payload) => {
        let { data } = await Axios.post('http://yourwebsite.com/api/results')
        context.commit('ADD_RESULTS',payload)
    }
}
export default {
    state,getters,mutations,actions
}