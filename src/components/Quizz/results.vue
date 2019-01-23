<template>
    <div>
       <h2>results</h2>
       <div v-for="result of results" :key="result.question">
            {{result.question}}
            <p>La réponse est: {{result.response?'Juste':'Fausse'}}</p>
           
       </div>
    </div>
</template>
<script>

export default {
    computed : {
        results(){
            return this.$store.getters.RESULTS
        }
    }
}
</script>
