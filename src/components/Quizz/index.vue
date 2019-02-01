<template>
<div><Header/>
  <div class="container">
    <h1 class="m-5">{{jsonApi.title}}</h1>
    <div class="row">
      <div class="col"></div>
      <div class="col-10">
        <div class="container">
          <h2>{{jsonApi.questions[index].question}} ?</h2>
          <div class="row">
            <div class="col"></div>
            <div class="col-8">
            <form class="form">
              <div v-for="(answer,answerindex) of jsonApi.questions[index].answers" :key="answer.value" :answer="answer">
              <!--<input type="radio" v-bind:id="answer.id" v-bind:name="jsonApi.questions[index].question" v-bind:value="answer.value" v-model="userAnswer">
              <label v-bind:for="answer.id">{{answer.name}}</label>-->
                  <div class="inputGroup">
                      <input v-bind:id="answerindex" v-bind:name="index" type="radio" v-bind:value="answer.value" v-model="userAnswer" />
                      <label v-bind:for="answerindex">{{answer.name}}</label>
                  </div>
              </div>
          </form>
            </div>
            <div class="col"></div>
          </div>
        </div>
      </div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col-9"></div>
      <div class="col">
        <!--<button v-if="index > 0" v-on:click="previous()" class="btn btn-danger">Revenir</button>-->
        <button v-on:click="next()" class="buttonRetour">Suivant</button>
      </div>
    </div>
  </div>
  </div>
</template>

 <script>
import axios from "axios";
import json from '../Api/apiQuizz.json';
import Header from '../Header.vue';
export default {
  name: 'quizz',
  components:{
      Header
  },
  data () {
    return {
      index:0,
      userAnswer:null,
      answers:[]
    }
  },
  methods: {
    next: function () {
          let userAnswer = this.userAnswer
          let correct = false;
          this.jsonApi.questions[this.index].answers.forEach(function(answer) {
              if(answer.value == userAnswer){
                correct = answer.value;
              };
          });
          let question = this.jsonApi.questions[this.index]
          let test = {"id":question.id, "object":{"questions":question,"response":correct}}
          this.$store.dispatch('ADD_RESULT',{"questions":question,"response":correct})
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
<style>
.inputGroup {
  background-color: #fff;
  display: block;
  margin: 10px 0;
  position: relative;

}
.inputGroup label {
  padding: 12px 30px;
  width: 100%;
  display: block;
  text-align: left;
  color: #3C454C;
  cursor: pointer;
  position: relative;
  z-index: 2;
  transition: color 200ms ease-in;
  overflow: hidden;
   border: 2px solid #df091d;
}
.inputGroup label:before {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  content: '';
  background-color: #5562eb;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%) scale3d(1, 1, 1);
          transform: translate(-50%, -50%) scale3d(1, 1, 1);
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  z-index: -1;
}
.inputGroup label:after {
  width: 32px;
  height: 32px;
  content: '';
  border: 2px solid #D1D7DC;
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E ");
  background-repeat: no-repeat;
  background-position: 2px 3px;
  border-radius: 50%;
  z-index: 2;
  position: absolute;
  right: 30px;
  top: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  cursor: pointer;
  transition: all 200ms ease-in;
}
.inputGroup input:checked ~ label {
  color: #df091d;
   border-width: 5px;
}
.inputGroup input:checked ~ label:before {
  -webkit-transform: translate(-50%, -50%) scale3d(56, 56, 1);
          transform: translate(-50%, -50%) scale3d(56, 56, 1);
  opacity: 0;
}
.inputGroup input:checked ~ label:after {
  background-color: #df091d;
  border-color: #df091d;

}
.inputGroup input {
  width: 32px;
  height: 32px;
  order: 1;
  z-index: 2;
  position: absolute;
  right: 30px;
  top: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  cursor: pointer;
  visibility: hidden;
}

.form {
  padding: 0 16px;
  max-width: 550px;
  margin: 50px auto;
  font-size: 18px;
  font-weight: 600;
  line-height: 36px;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
}
.buttonRetour {
    background-color: red;
    color:white;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    cursor: pointer;

}
.buttonRetour:hover {
    background-color: white;
    color:red;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    border:1px solid red;
    text-decoration: none;
    cursor: pointer;
}


</style>
