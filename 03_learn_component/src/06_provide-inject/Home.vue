<template>
  <div class="Home">
      Home
      <home-content></home-content>
  </div>
</template>

<script>
import HomeContent from "./HomeContent.vue";
export default {
    components: {
        HomeContent
    }
};
</script>

<style scoped>
.Home {
    background-color: pink;
}
</style>
