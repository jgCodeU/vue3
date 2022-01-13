<template>
    <div>
        <h2>当前计数:{{count}}</h2>
        <counter-operation @add="add1" @decrease="decrease1" @addN="addNum"></counter-operation>
        
    </div>
</template>

<script>
// 在CounterOperation.vue（子组件）中定义方法、触发方法
// 在App.vue（父组建）中监听、执行方方法
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