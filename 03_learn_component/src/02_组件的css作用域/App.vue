<template>
    <div>
        <h2>App</h2>
        <hello-world></hello-world>
    </div>
</template>

<script>
import HelloWorld from "./HelloWorld.vue"
    export default {
        components:{
            HelloWorld,
        }
    }
</script>

<style scoped>
/*
 scope:防止组件之间样式相互污染
 */
h2 {
    color: red;
}

</style>