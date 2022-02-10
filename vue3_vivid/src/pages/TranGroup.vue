<template>
    <div>
        transition-group(列表过渡)
    </div>
    <button @click="add">add</button>
    <transition-group name="list">
        <div v-for="item in items" :key="item">
            {{item}}
        </div>
    </transition-group>
</template>

<script setup>
    import {ref} from "vue"
    let items = ref([1,2,3,4,5,6])
    function add() {
        // items.value.push(66);
        // items.value.push(88)
        for(let i=0; i<3; i++){
            setTimeout(() => {
                items.value.push(66)
            }, 0);
        }
    }
</script>

<style scoped>
.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
.list-enter-to,
.list-leave-from {
    transition: all 1s ease;
}
</style>