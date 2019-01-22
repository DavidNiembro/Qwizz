<template>
    <div class="container">
        <h2>{{question && question.question}}</h2>
        <div class="row">
            <div class="col"></div>
            <div class="col-8">
                <Answer v-for="answer of question.answers" :key="answer.value" :answer="answer"/>
            </div>
            <div class="col"></div>
        </div>
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
