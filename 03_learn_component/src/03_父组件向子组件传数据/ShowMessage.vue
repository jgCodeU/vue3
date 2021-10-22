<template>
    <div>
        <h4>showmessage</h4>
        <!-- <div>{{message}}{{content}}</div> -->
        <div>{{message}}{{num}}</div>
        <div :class="$attrs.class" >{{content}}</div>
    </div>
</template>

<script>
    export default {
        inheritAttrs: false,
        // props可以是'数组'或者'对象'
        // props: ['message', 'content']
        props: {
            message : String,
            num : Number,
            content: {
                type: String,
                required: true,
                default: '默认默认默认默认内容' //default和require实际上只需要一个
            }
        },
        data() {
            return {
                data_1:'',
                data_2:'',
            }
        },
        mounted() {
          console.log('this.$attrs', this.$attrs)  
          console.log('this', this)  
        },
    }
</script>

<style scoped>

</style>