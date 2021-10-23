<template>
    <div>
        <button @click="add()">+1</button>
        <button @click="decrease()">-1</button>
        <button @click="addN()">+{{N}}</button>
        <input type="text" v-model.number="N">
    </div>
</template>

<script>
    export default {
        //数组写法
        // emits: [
        //     "add",
        //     "decrease",
        //     "addN"
        // ],
        // 对象写法,为了进行参数验证
        emits: {
            "add": null,//null表示不需要参数验证
            "decrease": null,
            addN: (param) => {
                if(param > 10) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        data() {
            return {
                N: 10,
            }
        },
        methods: {
            add(){
                console.log('add');
                this.$emit("add")
            },
            decrease(){
                console.log('decrease');
                this.$emit("decrease");
            },
            addN(){
                console.log("addN");
                this.$emit("addN",this.N)
            }
        },
        mounted() {
            console.log("CounterOperation-this",this)
        },
        
    }
</script>

<style scoped>

</style>