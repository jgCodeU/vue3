<template>
<!-- 
animation官网：
https://animate.style/
注意：进入和离开用不同的动画！！！
 -->
    <div>
        这是AnimationCss页面
    </div>
    <button @click="showDetail()">显示详情</button>
    <button @click="hideDetail()">隐藏详情</button>
    <transition name="detail">
      <div v-if="ifShowDetail">
        AnimationCssAnimationCssAnimationCssAnimationCssAnimationCssAnimationCss
      </div>
    </transition>
    
</template>

<script setup>
  import { ref } from 'vue'
  let ifShowDetail = ref(false)
  function showDetail() {
    ifShowDetail.value = true
  }
  function hideDetail() {
    ifShowDetail.value = false
  }
</script>

<style scoped>
.detail-enter-from {
  opacity: 0 ;
}
.detail-leave-to {
  opacity: 0;
}
.detail-enter-active {
  /* animation: zoomIn 1s ease; */
  animation: zoomInDown 1.5s ease;
  
}
.detail-leave-active {
  /* animation: zoomOut 1s ease; */
  animation: zoomOutDown 1.5s ease;
}




</style>