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
    import { onMounted, watch } from "vue";
    import Add from "../components/Add.vue";
    function foo() {
        console.log("Home---foo");
    }
    onMounted(foo);
    console.log("Home---setup");
</script>

<style scoped></style>
