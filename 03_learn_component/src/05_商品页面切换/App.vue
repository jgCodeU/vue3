<template>
    <div>
        <!-- <tab-control :arg1="param1" :arg2="param2" :arg3="param3"></tab-control> -->
        <tab-control :titles="titles" @changeContent="changeAppContent"></tab-control>
        <h4 v-if="activeIndex === -1">我是App页面</h4>
        <h4 v-if="activeIndex === 0">衣服页面</h4>
        <h4 v-if="activeIndex === 1">鞋子页面</h4>
        <h4 v-if="activeIndex === 2">裤子页面</h4>
    </div>
</template>

<script>
import TabControl from "./TabControl.vue"
    export default {
        components: {
            TabControl
        },
        data() {
            return {
                param1:"衣服",
                param2:"裤子",
                param3:"鞋子",
                titles: ['衣服', '裤子', '鞋子'],
                activeIndex:0,
            }

        },
        methods: {
            changeAppContent(index) {
                this.activeIndex = index
            }
        }
    }
</script>

<style scoped>

</style>