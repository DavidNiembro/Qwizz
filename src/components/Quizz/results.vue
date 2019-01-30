<template>
    <div>
        <Header/>
       <h2>results</h2>
       {{results}}
       <div v-for="result of results" :key="result.question">
            {{result}}
            <p>La réponse est: {{result}}</p>
       </div>
    </div>
</template>
<script>
import Header from '../Header.vue';
export default {
    name: 'results',
    components:{
      Header
    },
    computed : {
        results(){
            return this.$store.getters.RESULTS 
        }
    },
    created() {
        //if(this.results.length < 1){
         //   this.$router.push('/');
       // }
    }
}
</script>
