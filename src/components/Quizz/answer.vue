<template>
    <div class="input-group m-3">
        <div class="input-group-prepend">
            <div class="input-group-text">
                <input type="radio" aria-label="Radio button for following text input">
            </div>
        </div>
        <div type="text" class="form-control" aria-label="Text input with radio button"> {{answer && answer.value}}</div>
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
