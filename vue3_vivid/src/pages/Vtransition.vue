<template>
    <div>
        这是Vtransition页面
    </div>
    <button @click="showDetail()">显示详情</button>
    <button @click="hideDetail()">隐藏详情</button>
    <transition name="detail">
      <div v-if="ifShowDetail">
        详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息
        <!-- <p>详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息</p> -->
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
.detail-enter-active {
  transition: opacity .5s;
}
.detail-leave-to {
  opacity: 0;
}
.detail-leave-active {
  transition: opacity .5s;
}


</style>