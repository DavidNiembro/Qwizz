
<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: blue;">
  <a class="navbar-brand" href="#">Qwizz</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
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
      data: json
    }
  },
  async mounted () {
    
  /*URL = "http://awa-quizz.herokuapp.com/api/quizzes"
   axios.defaults.headers.common['quizz-token'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Imd1ZXN0IiwicGFzc3dvcmQiOiIkcGJrZGYyLXNoYTI1NiQyMDAwMCRjNjRWd3RnN0IuQThKeVJrN1AzL1h3JG9BRDloUnVEQTVkWVpKR1Y2cDNpdDBzYVFqdlFBemFZbi9wNW1kSGRDbDQifQ.P-KfTO8nq5oQNC_bIAY5VKOeNLyNbGE-gGrf0oIKQjc' // for POST requests
   axios.get(URL, {
      headers: { 
          'quizz-token' : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Imd1ZXN0IiwicGFzc3dvcmQiOiIkcGJrZGYyLXNoYTI1NiQyMDAwMCRjNjRWd3RnN0IuQThKeVJrN1AzL1h3JG9BRDloUnVEQTVkWVpKR1Y2cDNpdDBzYVFqdlFBemFZbi9wNW1kSGRDbDQifQ.P-KfTO8nq5oQNC_bIAY5VKOeNLyNbGE-gGrf0oIKQjc',
          'Content-Type': 'application/json'
          }
    }).then(response => {    
        this.data = response  
        console.log(response);
    });
*/
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
