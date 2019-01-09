
<template>
  <div class="hello">
    <h1>Qwizz</h1>
    <Card v-for="qwizz of data.quizzes" :key="qwizz.name" :qwizz="qwizz"/>
  </div>
</template>

<script>
import axios from "axios";
import json from './api.json';
import Card from "./Card.vue";

export default {
  name: 'HelloWorld',
  components:{
    Card
  },
  data () {
    return {
      data: json
    }
  },
  /*mounted () {
    axios
      .get('./api.json')
      .then(response => (this.data = response))
  }*/
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
