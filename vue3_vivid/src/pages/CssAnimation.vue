<template>
    <div>CssAniamtion页面</div>
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
        /* transition: all 1s ease 0s; */
        animation: blockAnimationB 2s ease 0s 1 normal forwards;
    }
    .newBlock {
        width: 300px;
        height: 300px;
        background-color: pink;
        animation: blockAnimation 2s ease 0s 1 normal forwards;
        /* animation: blockAnimation 3s linear 0s 1 normal forwards; */
    }
    @keyframes blockAnimation {
        /* from {opacity: 0;}
        to {opacity: 1;} */
        0% {opacity: 0;}
        50% {background-color: green;}
        100% {opacity: 1;}
    }
    @keyframes blockAnimationB {
        /* from {opacity: 0;}
        to {opacity: 1;} */
        0% {opacity: 0;}
        50% {background-color: rgb(128, 13, 0);}
        100% {opacity: 1;}
    }
    
</style>