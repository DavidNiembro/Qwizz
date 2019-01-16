
<template>
  <div class="hello">
    <h1>Qwizz</h1>
    <div style="display:flex">    
        {{this.$route.params.id }}
        {{jsonApi.quizz.title}}
        <Question :question="question"/>
        <button v-on:click="change()">Suivant</button>
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
      change: function () {
          this.index = this.index + 1
          this.question = this.jsonApi.quizz.questions[this.index]
      }
  },
  mounted () {
    this.question = this.jsonApi.quizz.questions[this.index]
    /*axios
      .get('./api.json')
      .then(response => (this.data = response))*/
  }
}
</script>