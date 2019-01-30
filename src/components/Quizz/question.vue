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
