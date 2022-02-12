<template>
    <div>
        这是JsGos（JS钩子）页面
    </div>
    <button @click="showDetail()">显示详情</button>
    <button @click="hideDetail()">隐藏详情</button>
    <transition @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
                @enter-cancelled="enterCancelled"
                @before-leave="beforeLeave"
                @leave="leave"
                @after-leave="afterLeave"
                @leave-cancelled="leaveCancelled">
      <div v-if="ifShowDetail">
        JsGos-JsGos-JsGos-JsGos-JsGos-JsGos-JsGos-JsGos-JsGos-JsGos-JsGos-JsGos
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
  // 动画生命周期
  function beforeEnter() {
    console.log('beforeEnter')
  }
  function enter() {
    console.log('enter')
  }
  function afterEnter() {
    console.log('afterEnter')
  }
  function enterCancelled() {
    console.log('enterCancelled')
  }
  function beforeLeave() {
    console.log('beforeLeave')
  }
  function leave() {
    console.log('leave')
  }
  function afterLeave() {
    console.log('afterLeave')
  }
  function leaveCancelled() {
    console.log('leaveCancelled')
  }
  // function xxxx() {
  //   console.log('xxxx')
  // }

</script>

<style scoped>
.detail-enter-from {
  opacity: 0 ;
}
.detail-leave-to {
  opacity: 0;
}
.detail-enter-active {

  
}
.detail-leave-active {

}




</style>