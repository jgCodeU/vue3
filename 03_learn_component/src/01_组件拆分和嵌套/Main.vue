<template>
    <div>
        <h4>我是Main</h4>
        <main-banner></main-banner>
        <main-goods></main-goods>
        
    </div>
</template>

<script>
import MainBanner from "./MainBanner.vue"
import MainGoods from "./MainGoods.vue"
    export default {
        components: {
            MainBanner,
            MainGoods
        }
    }
</script>

<style scoped>

</style>