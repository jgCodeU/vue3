<template>
  <div class="title">这里是Home页面</div>
  <!-- <add></add> -->
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
    import { onBeforeMount,onMounted, onBeforeUpdate, watch } from "vue";
    import Add from "../components/Add.vue";
    // onBeforeMount
    function onBM() {
    console.log('Home---onBeforeMount')
    }
    onBeforeMount(onBM)
    // onMounted
    function foo() {
        console.log("Home---onMounted");
    }
    onMounted(foo);
    // onBeforeUpdate
    function onBU() {
        console.log('Home---onBeforeUpdate')
    }
    onBeforeUpdate(onBU)
    console.log("Home---setup");
</script>

<style scoped></style>
