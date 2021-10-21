<template>
    <div>
        <h2>我是App</h2>
        <show-message message="AppMesage_1" content="AppContent_1"></show-message>
        <show-message message="AppMesage_2" content="AppContent_2"></show-message>
        <show-message :message="message" :content="content"></show-message>
    </div>
</template>

<script>
import ShowMessage from './ShowMessage.vue'
    export default {
        components: {
            ShowMessage
        },
        data() {
            return {
                message:'AppMesage_3',
                content:'AppContent_3'
            }
        },
    }
</script>

<style scoped>

</style>