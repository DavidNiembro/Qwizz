<template>
    <div class="col-md-4">
        <router-link :to="'/' + qwizz.id">
            <span class="card" v-bind:style="{'background-image': 'url('+qwizz.image+')'}"/>
            <div class="cardTitle">
                <h2>{{qwizz.title}}</h2>
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    props:{
        qwizz:{
            type: Object,
        }
    }
}
</script>
<style lang="css" scoped>
.cardTitle{
    padding-left: 20px;
    text-align: center;
    vertical-align: middle;
    color:#df091d;
    padding-top:20px;
}
.card {
    margin-top: 50px;
    min-height: 250px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    filter: drop-shadow(0 0 0.35rem lightgray);
    margin-left: 20px;
    display:flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
}
.cardTitle:hover{
  color: #df091d;
  text-decoration: underline;
  text-decoration-color:#df091d;
}
.card:hover ~ .cardTitle{
  color: #df091d;
  text-decoration: underline;
  text-decoration-color:#df091d;
}
</style>
