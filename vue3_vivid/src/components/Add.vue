<template>
    <button @click="add">{{count}}</button>
</template>

<script setup>
    import { ref } from 'vue'
    let count  = ref(1)
    function add() {
        count.value ++
        try {
            throw new Error('子组件出错被接收')
        } catch(err) {
            console.log(err.message)
        }
        throw new Error('未处理的错误')

        // try {
        //     foo(0)
        //     console.log('foo2中tryfoo后续代码执行')
        //     } catch(err) {
        //         console.log(err.message)
        //     } finally {
        //         // finally中的代码无论之前是否有错误，都会执行
        //         console.log('finally代码执行')
        //     }
    }



</script>

<style scoped>

</style>