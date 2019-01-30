
<template>
<div>
   <Header/>
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
import Header from "./Header.vue";

export default {
  name: 'index',
  components:{
    Card,
    Header
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
