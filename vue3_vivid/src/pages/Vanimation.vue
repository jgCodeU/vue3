<template>
    <div>
        这是Vanimation页面
    </div>
    <button @click="showDetail()">显示详情</button>
    <button @click="hideDetail()">隐藏详情</button>
    <transition name="bounce">
      <div v-show="ifShowDetail">
        <p>详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息</p>
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
/* .bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% { transform: scale(0); }
  50% { transform: scale(1.25); }
  100% { transform: scale(1); }
} */


.bounce-enter-active {
  animation: bounce-in 0.5s ease;
}
.bounce-leave-active {
  animation: bounce-out 0.5s ease;
}

@keyframes bounce-in {
  0% { transform: scale(0); }
  50% { transform: scale(1.25); }
  100% { transform: scale(1); }
}
@keyframes bounce-out {
  0% { transform: scale(1); }
  50% { transform: scale(1.25); }
  100% { transform: scale(0); }
}


</style>