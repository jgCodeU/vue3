<template>
    <div>
        <h2>当前计数:{{count}}</h2>
        <counter-operation @add="add1" @decrease="decrease1" @addN="addNum"></counter-operation>
        
    </div>
</template>

<script>
import CounterOperation from "./CounterOperation.vue"
    export default {
        components:{
            CounterOperation
        },
        methods: {
            add1() {
                console.log("App-add")
                this.count ++
            },
            decrease1() {
                console.log("App-decrease")
                this.count --
            },
            addNum(N){
                console.log("App-addN");
                this.count += N
            }
        },
        data() {
            return {
                count: 0,
            }
        },
    }
</script>

<style scoped>

</style>