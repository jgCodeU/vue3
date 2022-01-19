<template>
  <div class="title">这里是Home页面</div>
  <div v-if="ifshowDom1">Home---Dom1</div>
  <div>Home---Dom2</div>
  <button @click="deleteDom1()">移除Dom1</button>
  <button @click="showDom1()">显示Dom1</button>
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

<style scoped></style>
