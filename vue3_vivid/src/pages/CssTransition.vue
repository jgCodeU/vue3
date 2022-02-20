<template>
    <div>CssTransition页面</div>
    <button @click="showNewBlock">变换样式</button>
    <div class="block" :class="{newBlock: ifShowNewBlock}">正方形</div>
</template>

<script setup>
 import { ref } from 'vue'
 let ifShowNewBlock = ref(false)
 function showNewBlock() {
     ifShowNewBlock.value = !ifShowNewBlock.value
 }
</script>

<style scoped>
    .block {
        width: 200px;
        height: 200px;
        margin: 0 auto;
        margin-top:10px ;
        background-color: skyblue;
        transition: all 1s ease 0s;
        /* transition: background-color 1s ease 0s; */
        /* transition: width 1s ease 0s; */
    }
    .newBlock {
        width: 300px;
        height: 300px;
        background-color: pink;
    }
</style>