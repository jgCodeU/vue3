<template>
    <button @click="add">{{count}}</button>
</template>

<script setup>
    import { ref } from 'vue'
    let count  = ref(1)
    function add() {
        count.value ++
    }



</script>

<style scoped>

</style>