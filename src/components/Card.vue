<template>
    <router-link :to="'/' + qwizz.id">
        <div class="card">
            {{qwizz.name}}
        </div>
    </router-link>
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
<style lang="css"scoped>

.card {
    height:150px;
    width:150px;
    background-color:white;
    filter: drop-shadow(0 0 0.35rem lightgray);
    margin-left: 20px;
    display:flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
}
</style>
