<template>
<!-- 
    transform动画机制默认是进入和离开同时进行，
    所以当两个元素在同一个地方进行显示切换时，
    会出现同时出现的情况
    使用mode属性可以设置元素进入和离开的先后顺序
-->
    <div>
        <button @click="shiftComponent">componentAdd</button>
        <button @click="shiftComponent">componentHelloWorld</button>
    </div>
    <!-- <transition name="modeExp" mode="out-in"> 
        <component :is="componentId"></component>
    </transition>
    <HelloWorld msg="Hello Vue 3 + Vite" /> -->
    <!-- <component :is="componentId"></component> -->
    <!-- <component :is="isShow ? 'App':'HelloWorld' "></component> -->
    <transition>
        <component :is="isShow ? 'App':'HelloWorld' "></component>
    </transition>

</template>

<script setup>
    import { ref } from 'vue'
    import Add from '../components/Add.vue'
    import HelloWorld from '../components/HelloWorld.vue'


    let isShow = ref(false)
    // function shiftComponent() {
    //     if(componentId.value === 'HelloWorld') {
    //         componentId.value = 'Add'
    //         return
    //     }
    //     componentId.value = 'Add'
    // }
    
</script>

<style scoped>
.modeExp-enter-from,
.modeExp-leave-to {
    opacity: 0;
}
.modeExp-enter-active,
.modeExp-leave-active {
    transition: opacity .5s ease;
}
</style>