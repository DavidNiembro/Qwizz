<template>

  <div class="container">
    <h1 class="m-5">{{jsonApi.title}}</h1>
    <div class="row">
      <div class="col"></div>
      <div class="col-10">
        <div class="container">
          <h2>{{jsonApi.questions[index].question}}</h2>
          <div class="row">
            <div class="col"></div>
            <div class="col-8">
              <div v-for="answer of jsonApi.questions[index].answers" :key="answer.value" :answer="answer">
                  <div class="input-group m-3">
                      <input type="radio" v-bind:id="answer.id" v-bind:name="jsonApi.questions[index].question" v-bind:value="answer.value" v-model="userAnswer">
                      <label v-bind:for="answer.id">{{answer.name}}</label>
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

export default {
  name: 'quizz',

  data () {
    return {
      index:0,
      userAnswer:null
    }
  },
  methods: {
    next: function () { 
          let userAnswer = this.userAnswer
          let correct = false;
          this.jsonApi.questions[this.index].answers.forEach(function(answer) {
              if(answer.value == userAnswer){
                correct = answer.correct;
              };
          });
          
          let question = this.jsonApi.questions[this.index].question
          this.$store.dispatch('ADD_RESULT',{ "questions":question, "response": true})
          
          if(this.index+1 == Object.keys(this.jsonApi.questions).length){
            this.$router.push('/' + this.$route.params.id +"/results");
          }else{
            this.index = this.index + 1
            this.question = this.jsonApi.quizz.questions[this.index];
          }
    },
    previous: function () {
        this.index = this.index - 1
        //this.question = this.jsonApi.quizz.questions[this.index]
    }
  },
  computed : {
    jsonApi(){
      return this.$store.getters.QUIZZ
    }
  },
  mounted () {
    this.$store.dispatch('GET_QUIZZ',{id: this.$route.params.id})
  }
}
</script>