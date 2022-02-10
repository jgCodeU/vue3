<template>
    <div class="runningPause">
        <h1>启动暂停切换</h1>
        <!-- 硬切换 -->
        <!-- <div class="pause" v-show="!isRunning" @click="startRun"></div>
        <div class="running" v-show="isRunning" @click="pause"></div> -->
        <!-- 软切换 -->
        <transition name="runningPause">
            <div class="pause" v-if="!isRunning" @click="startRun"></div>
            <div class="running" v-else-if="isRunning" @click="pause"></div>
        </transition>
    </div>

    <div class="progress">
        <h1>进度条</h1>
        <!-- 无论进度条的实际状态如何，都从0开始上涨到实际状态处 -->
    </div>

    <div class="showTips">
        <h1>弹框提示</h1>
    </div>

    <div class="block"></div>
</template>

<script setup>
    import {ref} from "vue"

    // 启动、暂停切换
    let isRunning = ref(true)
    function startRun() {
        isRunning.value = true
    }
    function pause() {
        isRunning.value = false
    }
</script>

<style scoped>
/* 启动暂停 */
.runningPause {
    position: relative;
    margin: 0 auto;
    margin-top: 20px;
    width: 200px;
    height: 200px;
    border: 2px solid black;
    background-color: rgba(39, 108, 255, 0.913);
}
.running,
.pause {
    width: 100px;
    height: 100px;
    background-image: url("../assets/image/WashDemo/run-go-on-icon.png");
    background-repeat: no-repeat;
    /* background-color: pink; */
    margin: 0 auto;
    position: absolute;
    left: 0;
    right: 0;
}
.running {
    background-image: url("../assets/image/WashDemo/run-pause-icon.png");
}
.runningPause-enter-from,
.runningPause-leave-to {
    opacity: 0;
}
.runningPause-enter-active,
.runningPause-leave-active {
    transition: opacity .5s;
}

/* 进度条 */
.progress {
    position: relative;
    margin: 0 auto;
    margin-top: 20px;
    width: 600px;
    height: 200px;
    border: 2px solid black;
    /* background-color: rgba(39, 108, 255, 0.913); */
}

/* 弹框提示 */
.showTips {
    position: relative;
    margin: 0 auto;
    margin-top: 20px;
    width: 600px;
    height: 200px;
    border: 2px solid black;
}


.block {
    height: 200px;
}
</style>