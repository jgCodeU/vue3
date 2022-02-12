<template>
<!-- 
官网：https://greensock.com/
GitHub：https://github.com/greensock/GSAP
注意：

 -->
    <div>
        这是Gsap页面
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
        Gsap-Gsap-Gsap-Gsap-Gsap-Gsap-Gsap-Gsap-Gsap-Gsap-Gsap
      </div>
    </transition>
    
</template>

<script setup>
  import { ref } from 'vue'
  import gsap from 'gsap'

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
  function enter(el, done) {
    console.log('enter')
    gsap.from(el, {
      scale: 0,
      x: -200,
      onComplete: done
    })

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
  function leave(el, done) {
    console.log('leave')
    gsap.to(el, {
      scale: 0,
      x: 200,
      onComplete: done
    })
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