<template>
    <div>
       <h2>results</h2>
       {{results}}
       <div v-for="result of results" :key="result.question">
            {{result[0]}}
            <p>La réponse est: {{result.response}}</p>
       </div>
    </div>
</template>
<script>

export default {
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
