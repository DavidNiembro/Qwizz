<template>
    <div class="card">
        {{qwizz.name}}
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
<style lang="css"scoped>

.card {
    height:150px;
    width:150px;
    background-color:white;
    filter: drop-shadow(0 0 0.25rem grey);
    margin-top: 20px
}
</style>
