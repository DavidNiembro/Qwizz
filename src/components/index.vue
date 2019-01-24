
<template>
<div>
    <nav class="navbar navbar-expand-md navbar-light justify-content-between" >
      <a class="navbar-brand" href="#"> <h2>Qwizz</h2></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto ">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Login</a>
          </li>
        </ul>
      </div>
    </nav>
<div class="container">
  <div class="row" style="margin-top:25px">
    <div class="col text-center">
       <h1 style="fontSize:100px">Qwizz</h1>
    </div>
  </div>
  <div class="row" style="margin-top:25px">
    
    <Card v-for="qwizz of data.quizzes" :key="qwizz.name" :qwizz="qwizz"/>
    
  </div>
</div>
</div>
</template>

<script>
import axios from "axios";
import json from './Api/api.json';
import Card from "./Card.vue";

export default {
  name: 'index',
  components:{
    Card
  },
  data () {
    return {
      //data: json
    }
  },
  computed : {
    data(){
      return this.$store.getters.QUIZZES
    }
  },
  async mounted () {
    this.$store.dispatch('GET_QUIZZES')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
