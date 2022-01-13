<template>
  <div class="HomeContent">
    HomeContent
  </div>
</template>

<script>
import emitter from "./utils/eventbus";
export default {
  created() {
    // 单个接收
    // emitter.on("btn1", (infor) => {
    //   console.log("btn1", infor);
    // });

    // 全部接收
    emitter.on('*', (infor) => {
        console.log(infor)
    })
  },
};
</script>

<style scoped>
.HomeContent {
  background-color: skyblue;
}
</style>
