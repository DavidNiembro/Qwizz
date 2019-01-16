<template>
    <div>
        <div class="card">
            {{question.question}}
        </div>
        <Answer v-for="answer of question.answers" :key="answer.value" :answer="answer"/>
    </div>
</template>
<script>
import Answer from "./answer.vue";

export default {
    components:{
        Answer
    },
    props:{
        question:{
            type: Object,
        }
    }
}
</script>
<style lang="css"scoped>

.card {
    height:150px;
    width:150px;
    background-color:white;
    filter: drop-shadow(0 0 0.35rem lightgray);
    margin-left: 20px;
    display:flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
}
</style>
