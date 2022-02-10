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
        <button @click="resetProgress">复位进度条</button>
        <div class="progressStatus" :class="{downloadProgress: ifStartDownload}" @click="downloadCard">
            <span class="startDownloadCard" v-if="!ifStartDownload">开始下载</span>
        </div>
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
            <button @click="showTab1Content">tab-1</button>
            <button @click="showTab2Content">tab-2</button>
        </div>
        <!-- <transition name="statusContent">
            <div class="statusContent-1" v-if="tabNum === 1">tab-1中显示内容111111111111</div>
            <div class="statusContent-2" v-else-if="tabNum === 2">tab-2中显示内容222222222222</div>
        </transition> -->

        <transition :name="statusContent_1">
            <div class="statusContent-1" v-if="tabNum === 1">tab-1中显示内容111111111111</div>
        </transition>   
        <transition :name="statusContent_2">
            <div class="statusContent-2" v-if="tabNum === 2">tab-2中显示内容222222222222</div>
        </transition>
    </div>

    <!-- ****************卡片增删*************** -->
    <div class="cardsNumChange">
        <h1>卡片增删(点击卡片也可删除)</h1>
        <div class="cardBtnContent">
            <button @click="addCard">增加卡片</button>
            <button @click="deleteCard">删除卡片</button>
        </div>
        <div class="cardsContent">
            <transition-group name="cardList">
                <div class="cardList" v-for="(item, index) in cardList" :key="item" @click="deleteInCard(index)">{{cardList[index]}}</div>
            </transition-group>
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

    //进度条
    let ifStartDownload = ref(false)
    function downloadCard() {
        ifStartDownload.value = true
    }
    function resetProgress() {
        ifStartDownload.value = false
    }

    // 弹框提示
    let ifShowTips = ref(false)
    function showTips() {
        ifShowTips.value = (true)
    }
    function closeBtn() {
        ifShowTips.value = false
    }

    // 切换区域显示内容
    let tabNum = ref(0)
    let statusContent_1 = ref('1')
    let statusContent_2 = ref('1')
    function showTab1Content() {
        tabNum.value = 1
        // left-enter-from
        statusContent_1.value = "left"
        // right-leave-to
        statusContent_2.value = "right"
    }
    function showTab2Content() {
        tabNum.value = 2
        // left-leave-to
        statusContent_1.value = "left"
        // right-enter-from
        statusContent_2.value = "right"
    }

    //卡片增删
    let cardList = ref([1, 2, 3, 4, 5, 6])
    function randomIndex() {
        return Math.floor(Math.random() * cardList.value.length)
    }
    function addCard() {
        cardList.value.push(cardList.value.length + 1)
    }
    function deleteCard() {
        cardList.value.splice(randomIndex(), 1)
    }
    function deleteInCard(index) {
        cardList.value.splice(index, 1)
    }


</script>

<style scoped>
/* ***************启动暂停*************** */
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

/* ***************进度条*************** */
.progress {
    position: relative;
    margin: 0 auto;
    margin-top: 20px;
    width: 600px;
    height: 200px;
    border: 2px solid black;
    /* background-color: rgba(39, 108, 255, 0.913); */
}
.startDownloadCard {
    line-height: 50px;
}
.progressStatus {
    /* display: inline-block; */
    width: 350px;
    height: 50px;
    border-radius: 50px;
    margin: 0 auto;
    margin-top: 10px;
    background-color: gray;
    /* transition: 1s length ease; */
}
.downloadProgress {
    transform-origin: left;
    background-color: rgba(56, 95, 255, 0.762);
    animation: downloadStatus 3s linear 0s 1 normal forwards;
    /* animation: name duration timing-function delay iteration-count direction fill-mode; */
}
@keyframes downloadStatus {
    from {transform: scaleX(0);}
    to {transform: scaleX(1); background-color: rgba(56, 95, 255, 0.762);}

    /* from {width: 0;}
    to {width: 350px; background-color: rgba(39, 108, 255, 0.913);} */
}


/* ***************弹框提示*************** */
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

/* ***************切换区域显示内容*************** */
.runningStatus {
    position: relative;
    margin: 0 auto;
    margin-top: 20px;
    width: 600px;
    height: 210px;
    border: 2px solid black;
}
.tabContent {
    width: 200px;
    height: 30px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: pink;
}
.statusContent-1,
.statusContent-2 {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 40px;
}

.left-enter-from {
    opacity: 0;
    transform: translateX(-200px);
}
.right-enter-from {
    opacity: 0;
    transform: translateX(200px);
}
.left-leave-to {
    opacity: 0;
    transform: translateX(-200px);
}
.right-leave-to {
    opacity: 0;
    transform: translateX(200px);
}
.right-enter-active,
.right-leave-active,
.left-enter-active,
 .left-leave-active{
    transition: all 1s;
}

/* ***************卡片增删*************** */
.cardsNumChange {
    position: relative;
    margin: 0 auto;
    margin-top: 20px;
    width: 600px;
    height: 400px;
    border: 2px solid black;
    overflow: scroll;
}
.cardBtnContent {
    width: 200px;
    height: 30px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: pink;
}
.cardsContent {
    position: relative;
    width: 130px;
    margin: 0 auto;
    /* background-color: skyblue; */
}
.cardList {
    width: 50px;
    height: 50px;
    display: inline-block;
    margin: 5px;
    transition: all .8s ease;
    background-color: pink;
}
.cardList-enter-from,
.cardList-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
/* .cardList-enter-active,
.cardList-leave-active {
    transition: all .5s;
} */
.cardList-leave-active {
    position: absolute;
}


/* 下方留白 */
.block {
    height: 200px;
}
</style>