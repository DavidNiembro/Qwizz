<template>
    <div>
        <Header/>
        <div class="container">
            <h1 class="m-5">Résultats</h1>
            <div class="row">
                <div v-for="result of results" :key="result.question">
                    <div class="col"></div>
                    <div class="col-12">
                        <div class="container">
                            <h2>{{result.questions.question}}</h2>
                            <div class="row">
                                <div class="col-8">
                                  <p>La réponse est {{result.response ? "juste": "fausse"}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col"></div>
                </div>
            </div>
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
        if(this.results.length < 1){
            this.$router.push('/');
        }
    }
}
</script>
