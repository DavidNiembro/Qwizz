
<template>
  <div class="container"> 
    <h1 class="m-5">{{jsonApi.quizz.title}}</h1>
    <div class="row">
      <div class="col"></div>
      <div class="col-10">
        <div class="container">
        <h2>{{question && question.question}}</h2>
        <div class="row">
            <div class="col"></div>
            <div class="col-8">
                <div v-for="answer of question.answers" :key="answer.value" :answer="answer">
                    <div class="input-group m-3">
                        <input type="radio" id="one" v-bind:name="question.question" v-bind:value="answer.value" v-model="userAnswer">
                        <label for="one">{{answer && answer.value}}</label>
                    </div>
                </div>
            </div>
            <div class="col"></div>
        </div>
    </div>
      </div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col-9"></div>
      <div class="col"> 
        <button v-on:click="previous()" class="btn btn-primary">Revenir</button>
        <button v-on:click="next()" class="btn btn-primary">Suivant</button>
      </div>
    </div>
  </div>   
</template>
 
 <script>
import axios from "axios";
import json from '../Api/apiQuizz.json';
//import Question from "./question.vue";

export default {
  name: 'quizz',
  components:{
    //Question
  },
  data () {
    return {
      jsonApi: json,
      question: null,
      index:0,
      userAnswer : null,
      resultsArray:[],
    }
  },
  methods: {
    next: function () { 
        let userAnswer = this.userAnswer
        let correct = null;
        this.question.answers.forEach(function(answer) {
            if(answer.value == userAnswer){
              correct = answer.correct;
            };
        });
        this.$store.dispatch('ADD_RESULT',{"question":this.question.question, "response": correct})
        this.index = this.index + 1
        this.question = this.jsonApi.quizz.questions[this.index];
        if(this.index == Object.keys(this.jsonApi.quizz.questions).length){
          this.$router.push('/' + this.$route.params.id +"/results");
        }
    },
    previous: function () {
        this.index = this.index - 1
        this.question = this.jsonApi.quizz.questions[this.index]
    }
  },
  mounted () {
    this.question = this.jsonApi.quizz.questions[this.index]
  }
}
</script>