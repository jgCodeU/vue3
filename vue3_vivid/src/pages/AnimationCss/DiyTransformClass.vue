<template>
<!-- 
animation官网：
https://animate.style/
注意：
(1)进入和离开用不同的动画！！！
(2)在使用自定义class时，需要加上animate__animated，否则看不见过渡效果，因为需要animate__animated指定过渡时间等
(3)当同时存在在定义的class和name属性时，自定义的class优先级更高
 -->
    <div>
        这是DiyTransformClass页面
    </div>
    <button @click="showDetail()">显示详情</button>
    <button @click="hideDetail()">隐藏详情</button>
    <transition enter-active-class="animate__animated animate__backInDown" leave-active-class="animate__animated animate__backOutDown">
      <div v-if="ifShowDetail">
        DiyTransformClassDiyTransformClassDiyTransformClassDiyTransformClass
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
  animation: zoomInDown 1s ease;
  
}
.detail-leave-active {
  /* animation: zoomOut 1s ease; */
  animation: zoomOutDown 1s ease;
}




</style>