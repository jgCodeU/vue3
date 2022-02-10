<template>
    <!-- ****************启动暂停切换*************** -->
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

    <!-- ****************弹框提示*************** -->
    <div class="showTips">
        <h1>弹框提示</h1>
        <button @click="showTips" class="btn">显示弹框</button>
        <!-- 硬切换 -->
        <!-- <div class="tipContent" v-show="ifShowTips">
            <p>提示信息提示信息提示信息</p>
            <div class="closeBtn" @click="closeBtn">关闭弹框</div>
        </div> -->
        <!-- 软切换 -->
        <transition name="showTips">
            <div class="tipContent" v-show="ifShowTips">
                <p>提示信息提示信息提示信息</p>
                <div class="closeBtn" @click="closeBtn">关闭弹框</div>
            </div>
        </transition>
    </div>

    <!-- ****************切换区域显示内容*************** -->
    <div class="runningStatus">
        <h1>切换区域显示内容</h1>
        <div class="tabContent">
            <button>tab-1</button>
            <button>tab-2</button>
        </div>
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


    //弹框提示
    let ifShowTips = ref(false)
    function showTips() {
        ifShowTips.value = (true)
    }
    function closeBtn() {
        ifShowTips.value = false
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
    height: 210px;
    border: 2px solid black;
}

.tipContent {
    width: 200px;
    border-radius: 10px;
    /* padding: 5px; */
    padding-top: 1px;
    margin: 0 auto;
    margin-top: 5px;
    background-color: skyblue;
}
.closeBtn {
    width: 100px;
    background-color: slategray;
    display: inline-block;
    margin-bottom:5px ;
    border-radius: 5px;
}
.showTips-enter-from,
.showTips-leave-to {
    opacity: 0;
}
.showTips-enter-active,
.showTips-leave-active {
    transition: opacity .5s;
}

/* 切换区域显示内容 */
.runningStatus {
    position: relative;
    margin: 0 auto;
    margin-top: 20px;
    width: 600px;
    height: 210px;
    border: 2px solid black;
}

/* 下方留白 */
.block {
    height: 200px;
}
</style>