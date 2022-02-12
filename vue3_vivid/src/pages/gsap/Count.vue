<template>
<!-- 
官网：https://greensock.com/
GitHub：https://github.com/greensock/GSAP
注意：
-->
    <div>
        这是Count页面
    </div>
    <input type="number" step="50" v-model="counter">
    <h2>当前计数{{showNumber.toFixed(0)}}</h2>
    
</template>

<script setup>
  import { ref, watch } from 'vue'
  import gsap from 'gsap'

  let counter = ref(0)
  let showNumber = ref(0)
  watch(counter,(newValue, oldValue) => {
    // 此处target不能用this
    gsap.to(this, {duration: 1, showNumber: newValue})
  })
  

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