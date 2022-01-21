<template>
  <div class="title">这里是Home页面</div>
  <div v-if="ifshowDom1" class="dom1" :class="{ animationDom1 : ifShowDom1Animation}">Home---Dom1</div>
  <div class="dom2">Home---Dom2</div>
  <button @click="deleteDom1Animation()">移除Dom1动画</button>
  <button @click="showDom1Animation()">增加Dom1动画</button>
  <br/>
  <Add />
</template>

<!-- <script>
export default {
    mounted() {
        console.log('Home---mounted')
    },
}
</script> -->

<script setup>
    import { ref } from "@vue/reactivity";
    import {onBeforeMount,
            onMounted, 
            onBeforeUpdate, 
            onUpdated, 
            onUnmounted, 
            onActivated,
            onDeactivated,
            onErrorCaptured,
            watch} from "vue";
    import Add from "../components/Add.vue";
    // dom1
    let ifShowDom1Animation = ref(false)
    function deleteDom1Animation() {
        ifShowDom1Animation.value = false
    }
    function showDom1Animation () {
        ifShowDom1Animation.value = true
    }













    // 生命周期
    // onBeforeMount
    function onBM() {
    console.log('Home---onBeforeMount')
    }
    onBeforeMount(onBM)
    // onMounted
    onMounted(() => {
        console.log('Home---onMount')
    });
    // onBeforeUpdate
    function onBU() {
        console.log('Home---onBeforeUpdate')
    }
    onBeforeUpdate(onBU)
    console.log("Home---setup");
    // onUpdated
    let ifshowDom1 = ref(true)
    function deleteDom1() {
        ifshowDom1.value = false
    }
    function showDom1() {
        ifshowDom1.value = true
    }
    function onU() {
        console.log('Home---onUpdated')
    }
    onUpdated(onU)
    // onUnmounted
    function onUM() {
        console.log('Home---onUnmounted')
    }
    onUnmounted(onUM)
    // onActivated
    function onA() {
        console.log('Home---onActivated')
    }
    onActivated(onA)
    // onDeactivated
    function onD() {
        console.log('Home---onDeactivated')
    }
    onDeactivated(onD)
    // onErrorCaptured
    function onE() {
        console.log('Home---onErrorCaptured')
    }
    onErrorCaptured(onE)

</script>

<style scoped>
.dom1 {
    /* width: 100px; */
    height: 100px;
    background-color: skyblue;
    margin: 0 auto;

}
.animationDom1 {
    animation: colorShift 2s ease 0s infinite alternate forwards;
}
@keyframes colorShift {
    50% { background-color: orchid; }
    100% { background-color: rebeccapurple; }
}
.dom2 {
    /* width: 100px; */
    height: 100px;
    background-color: pink;
    margin: 0 auto;
}
</style>
