<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import { watch } from 'vue'
console.log('App.vue')
</script>
<script>
export default {
  watch: {
    $route(to, from){
      console.log('路由跳转', to, from)
    }
  },
}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <div class="shiftPage">
    <router-link to="/" class="navigation">跳转Home页面</router-link>
    <!-- <router-link to="/About" >跳转About页面</router-link>｜ -->
    <!-- <router-link to="/Setuptest" >跳转Setuptest页面</router-link>| -->
    <router-link to="/CssTransition" class="navigation">CssTransition</router-link>
    <router-link to="/Vtransition" class="navigation">跳转Vtransition页面</router-link>
    <router-link to="/Vanimation" class="navigation">跳转Vanimation页面</router-link> 
    <router-link to="/VanimationTransition" class="navigation">跳转VanimationTransition页面</router-link>
    <router-link to="/VtransformMode" class="navigation">VtransformMode</router-link>
    <router-link to="/VcomponentShift" class="navigation">VcomponentShift</router-link>
    <router-link to="/AnimationCss" class="navigation">AnimationCss</router-link>
    <router-link to="/DiyTransformClass" class="navigation">DiyTransformClass</router-link>
    <router-link to="/JsGos" class="navigation">JsGos(JS钩子)</router-link>
    <router-link to="/gsap" class="navigation">Gsap</router-link>
    
    
    <router-link to="/TranGroup" class="navigation">列表过渡</router-link>
    <router-link to="/WashDemo" class="navigation">项目应用示例</router-link>
    
  </div>
  
  <router-view></router-view>
  <!-- <transition name="slide">
    <router-view></router-view>
  </transition> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.shiftPage {
  border-bottom: dashed 2px gray;
  margin-bottom: 5px;
  padding-bottom: 5px;
}
.navigation {
  /* width: 100px; */
  display: inline-block;
  height: 50px;
  margin: 5px;
  padding: 5px;
  line-height: 50px;
  background-color: rgb(220, 153, 111);
}
.slide-enter-from {
  opacity: 0;
}
.slide-enter-active {
  transition: opacity .5s;
}

</style>
