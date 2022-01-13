
<template>
    <div class="HomeContent">
        HomeContent
        {{name}}
        {{age}}
        {{length}}
    </div>
</template>

<script>
    export default {
        inject: ["name", "age", "length"]
    }
</script>

<style scoped>
.HomeContent {
    background-color: skyblue;
}
</style>