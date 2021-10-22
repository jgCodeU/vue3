<template>
    <div>
        <h2>我是App</h2>
        <show-message message="AppMesage_1" content="AppContent_1"></show-message>
        <show-message message="AppMesage_2" content="AppContent_2"></show-message>
        <show-message :message="message" :content="content"></show-message>

        <show-message message="AppMesage_1" :num="num" :content="content"></show-message>

        <show-message class='hjg' :content="content"></show-message>

        <!-- 子组件有多个根元素 -->
        <mult-root-element class="multRootElement"></mult-root-element>
    </div>
</template>

<script>
import ShowMessage from './ShowMessage.vue'
import MultRootElement from './MultRootElement.vue'
    export default {
        
        components: {
            ShowMessage,
            MultRootElement
        },
        data() {
            return {
                message:'AppMesage_3',
                // content:'AppContent_3'

                num: 111,
                content: '内容内容内容内容内容内容'
            }
        },
    }
</script>

<style scoped>
/* .hjg{

} */
</style>