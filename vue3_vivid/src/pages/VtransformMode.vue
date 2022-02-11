<template>
<!-- 
    transform动画机制默认是进入和离开同时进行，
    所以当两个元素在同一个地方进行显示切换时，
    会出现同时出现的情况
    使用mode属性可以设置元素进入和离开的先后顺序
-->
    <div>
        <button @click="shiftConten">切换内容</button>
    </div>
    <!-- <transition name="modeExp">  -->
    <!-- <transition name="modeExp" mode="in-out">  -->
    <transition name="modeExp" mode="out-in"> 
        <p v-if="content">11111111</p>
        <p v-else-if="!content">22222222</p>
    </transition>
</template>

<script setup>
    import { ref } from 'vue'
    let content = ref(true)
    function shiftConten() {
        content.value = !content.value
    }
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