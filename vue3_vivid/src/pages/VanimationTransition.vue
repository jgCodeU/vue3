<template>
    <!-- animation和transition混用时，如果两个动画的执行时间不一样，页面过渡效果会出现跳变 -->
    <!-- 此时可使用type属性，指定动画执行时间以哪个为准（但是一般不会混用transition和animation） -->
    <!-- duration属性：在transform组件上使用此属性，可显式制定动画时间 -->
    <div>
        这是VanimationTransition页面
    </div>
    <button @click="showDetail()">显示详情</button>
    <button @click="hideDetail()">隐藏详情</button>
    <!-- 使用type -->
    <!-- <transition name="bounce" type="animation"> -->
    <!-- 使用duration：可写内容：持续时间、{enter:开始时间, leave: 结束时间} -->
    <!-- duration不能控制animation的时间吗？？？？？？ -->
    <transition name="bounce" duration="5000">
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
.bounce-enter-active {
  animation: bounce-in 0.5s;
  transition: opacity 2s ease;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
  transition: opacity 2s ease;
}
.bounce-enter-from,
.bounce-leave-to {
  opacity: 0;
}
.bounce-enter-to,
.bounce-leave-from {
  opacity: 1;
}

@keyframes bounce-in {
  0% { transform: scale(0); }
  50% { transform: scale(1.25); }
  100% { transform: scale(1); }
}
</style>