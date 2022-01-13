<template>
    <div>
        <button @click="btnClick">about</button>
    </div>
</template>

<script>
import emitter from "./utils/eventbus"
    export default {
        methods: {
            btnClick() {
                console.log('about按钮点击')
                emitter.emit('about-btn1', {key: 'about-btn1', type: 'click App-btn1'})
            }
        }
    }
</script>

<style scoped>

</style>