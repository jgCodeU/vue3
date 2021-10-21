<template>
    <div>
        <h4>showmessage</h4>
        <div>{{message}}{{content}}</div>
        
    </div>
</template>

<script>
    export default {
        // props可以是数组或者对象
        props: ['message', 'content']
    }
</script>

<style scoped>

</style>