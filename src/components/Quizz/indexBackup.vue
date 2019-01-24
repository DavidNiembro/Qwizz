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
                            <label for="one">{{answer.name}}</label>
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
 