<template>
    <div class="input-group m-3">
        <input type="radio" id="one" name="" v-model="answer" v-bind:value="a">
        <label for="one">{{answer && answer.value}}</label>
        <span>value: {{question}}</span>
    </div>
</template>
<script>

export default {
    props:{
        answer:{
            type: Object,
        }
        
    }
}
</script>
