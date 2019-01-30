<template>
    <div class="col-4">
        <router-link :to="'/' + qwizz.id">
            <div class="card" style="width: 18rem;" v-bind:style="{'background-image': 'url('+qwizz.image+')'}">
                <div class="card-body">
                </div>
            </div>
                <div style="">

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
<style lang="css"scoped>

.card {
    min-height: 250px;
    background-color:white;
    filter: drop-shadow(0 0 0.35rem lightgray);
    margin-left: 20px;
    display:flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
}
</style>
