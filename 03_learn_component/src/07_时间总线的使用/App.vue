<template>
    <div>
        <home></home>
        <about></about>
        <button @click="btnClick">App</button>
    </div>
</template>

<script>
import Home from "./Home.vue"
import about from "./about.vue"
import emmiter from "./utils/eventbus.js"
import { computed } from 'vue'
    export default {
        components: {
            Home,
            about
        },
        data() {
            return {
                names: ['abc', 'bcd', 'cde']
            }
        },
        methods: {
            btnClick() {
                console.log('App按钮点击')
                emmiter.emit('App-btn1', {key:'App-btn1', value: 'click App-btn1'})
            }
        }
    }
</script>

<style scoped>

</style>