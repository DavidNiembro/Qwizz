
<template>
  <div class="container"> 
    <h1 class="m-5">{{jsonApi.quizz.title}}</h1>
    <div class="row">
      <div class="col"></div>
      <div class="col-10"><Question :question="question"/></div>
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
import Question from "./question.vue";

export default {
  name: 'quizz',
  components:{
    Question
  },
  data () {
    return {
      jsonApi: json,
      question: null,
      index:0
    }
  },
  methods: {
    next: function () {
        this.index = this.index + 1
        this.question = this.jsonApi.quizz.questions[this.index]
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