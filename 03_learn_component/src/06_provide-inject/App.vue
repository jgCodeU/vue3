<template>
    <div>
        <home></home>
    </div>
</template>

<script>
// 在App.vue（父组件）中的provide属性中定义并初始化
// 在HomeContent（子组件）的inject属性只中接收
// 父组件中provide的值只能给自己的子孙组件使用，不能在自身中使用，也不能在兄弟组件中使用。
// 如果父组件要provide一个对象，则需要将provide写成函数的形式，否则多个子组件使用同一个父组件provide对象时会互相影响
// 如果父组件要provide自己data中的值，也需要将provide写成函数的形式，否则无法获得正确的this。
import Home from "./Home.vue"
import { computed } from 'vue'
    export default {
        components: {
            Home
        },
        // provide普通值
        // provide: {
        //     name: 'zhansgan',
        //     age: '21'
        // }

        // provide组件data中的值
        // provide() {
        //     return {
        //         name: 'zhansgan',
        //         age: '21',
        //         length: this.names.length
        //     }
        // },
        // 响应式改变provide值，使用computed
        provide() {
            return {
                name: 'zhansgan',
                age: '21',
                length: computed(() => this.names.length)
            }
        },
        data() {
            return {
                names: ['abc', 'bcd', 'cde']
            }
        }
    }
</script>

<style scoped>

</style>