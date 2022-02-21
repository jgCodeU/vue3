在不使用动画时，我们改变一个元素的样式，样式会立即生效，页面上元素通过跳变的方式切换到新的样式。

```javascript
<template>
    <div>CssTransition页面</div>
    <button @click="showNewBlock">变换样式</button>
    <div class="block" :class="{newBlock: ifShowNewBlock}">正方形</div>
</template>

<script setup>
 import { ref } from 'vue'
 let ifShowNewBlock = ref(false)
 function showNewBlock() {
     ifShowNewBlock.value = !ifShowNewBlock.value
 }
</script>

<style scoped>
    .block {
        width: 200px;
        height: 200px;
        margin: 0 auto;
        margin-top:10px ;
        background-color: skyblue;
        /* transition: all 1s ease 0s; */
    }
    .newBlock {
        width: 300px;
        height: 300px;
        background-color: pink;
    }
</style>
```

<img src="/Users/hujianguo/Library/Application Support/typora-user-images/image-20220213195512314.png" alt="image-20220213195512314" style="zoom:35%;" />

<img src="/Users/hujianguo/Library/Application Support/typora-user-images/image-20220213195713961.png" alt="image-20220213195713961" style="zoom:30%;" />

当我们需要让元素通过过渡的方式切换到新状态的时，就需要用到动画。使用css来实现动画，主要用到transition和animation



# 1.transition

```javascript
<template>
    <div>CssTransition页面</div>
    <button @click="showNewBlock">变换样式</button>
    <div class="block" :class="{newBlock: ifShowNewBlock}">正方形</div>
</template>

<script setup>
 import { ref } from 'vue'
 let ifShowNewBlock = ref(false)
 function showNewBlock() {
     ifShowNewBlock.value = !ifShowNewBlock.value
 }
</script>

<style scoped>
    .block {
        width: 200px;
        height: 200px;
        margin: 0 auto;
        margin-top:10px ;
        background-color: skyblue;
        transition: all 1s ease 0s;
    }
    .newBlock {
        width: 300px;
        height: 300px;
        background-color: pink;
    }
</style>
```

4个属性

transition-property：指定应用过渡属性的名称，默认none（none、all、IDENT）。当使用all时，所有属性变化都会应用过渡效果。

transition-duration：过渡持续时间，默认0s（单位：s、ms）。

transition-timing-function：过渡过程应用的函数（比如先快后慢、先慢后快、线性变化等）。

transition-delay：规定了在过渡效果开始作用之前需要等待的时间。

具体用法：在元素初始状态时，写上transition的各个属性，当元素的某个样式变化时，根据transition展示过渡效果

特点：过渡只有两个关键帧（状态），即变化前状态和变化后的状态。

参考资料：https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition



# 2.animation

animation: name duration timing-function delay iteration-count direction fill-mode;

animation-name：动画名称，代表一个由@keyframes定义的动画序列

animation-duration：动画持续时间，单位为秒或者毫秒

animation-timing-function：定义CSS动画在每一动画周期中执行的节奏

animation-delay：动画应用到元素上后到开始执行前的时间（定义一个负值会让动画立即开始。但是动画会从它的动画序列中某位置开始。例如，如果设定值为-1s，动画会从它的动画序列的第1秒位置处立即开始。）

animation-iteration-count：动画播放次数（如果指定了多个值，每次播放动画时，将使用列表中的下一个值，在使用最后一个值后循环回第一个值。）

animation-direction：动画播放顺序（normal、alternate、reverse、alternate- reverse）

animation-fill-mode：设置CSS动画在执行之前和之后如何将样式应用于其目标。

animation-play-state：标志/一个动画处于暂停或者运行中（paused、running）

@keyframe：定义动画序列中的关键帧，控制动画的变换（中间步骤）。每个 `@keyframes` 规则包含多个关键帧，也就是一段样式块语句，每个关键帧有一个百分比值作为名称，代表在动画进行中，在哪个阶段触发这个帧所包含的样式。

特点：可定义元素变化过程中的多个中间状态，方便实现动画的连续播放，使用加灵活。

具体用法：在某个class上加上animation属性，表示从其他样式转变为这个样式需要经历的动画过程。

```javascript
<template>
    <div>CssAniamtion页面</div>
    <button @click="showNewBlock">变换样式</button>
    <div class="block" :class="{newBlock: ifShowNewBlock}">正方形</div>
</template>

<script setup>
 import { ref } from 'vue'
 let ifShowNewBlock = ref(false)
 function showNewBlock() {
     ifShowNewBlock.value = !ifShowNewBlock.value
 }
</script>

<style scoped>
    .block {
        width: 200px;
        height: 200px;
        margin: 0 auto;
        margin-top:10px ;
        background-color: skyblue;
        /* transition: all 1s ease 0s; */
        animation: blockAnimationB 2s ease 0s 1 normal forwards;
    }
    .newBlock {
        width: 300px;
        height: 300px;
        background-color: pink;
        animation: blockAnimation 2s ease 0s 1 normal forwards;
        /* animation: blockAnimation 3s linear 0s 1 normal forwards; */
    }
    @keyframes blockAnimation {
        /* from {opacity: 0;}
        to {opacity: 1;} */
        0% {opacity: 0;}
        50% {background-color: green;}
        100% {opacity: 1;}
    }
    @keyframes blockAnimationB {
        /* from {opacity: 0;}
        to {opacity: 1;} */
        0% {opacity: 0;}
        50% {background-color: rgb(128, 13, 0);}
        100% {opacity: 1;}
    }
    
</style>
```



# 3.Vue中的transition组件

使用transition和animation，需要自己控制何时添加class，何时去除class。

Vue提供了transition组件，可以给任何元素添加进入、离开的过渡。

在元素进入和离开时添加过渡。

## transition组件的原理：

当插入或者删除包含在transition组件中的元素时，Vue会做以下处理：

（1）自动嗅探目标元素是否应用了CSS过渡或者动画，如果有，则在恰当的时机添加/删除CSS类名；

（2）如果transition组件提供了JavaScript钩子函数，这些钩子函数将在恰当的时机被调用；

（3）如果没有找到JavaScript钩子，也没检测到CSS过渡，那么DOM的插入/删除操作会立即执行。

基本用法：https://v3.cn.vuejs.org/guide/transitions-enterleave.html#%E8%BF%87%E6%B8%A1-class

HTML：将需要过渡的元素用 <transition></transition>组件包裹起来。

CSS：使用符合Vue3指定规则的类名定义过渡动画。

JavaScript：控制元素的显示和隐藏。

```javascript
<template>
    <div>
        这是Vtransition页面
    </div>
    <button @click="showDetail()">显示详情</button>
    <button @click="hideDetail()">隐藏详情</button>
    <transition name="detail">
      <div v-if="ifShowDetail">
        详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息
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
```

注意，Vue2和Vue3中class的写法不一样！

我们在使用

```javascript
 <transition name="detail">......</transition>
```

时，如果没有name属性，则CSS中的过渡class以"v-"开头，当我们使用了name属性，举例来说，如果你使用了 <transition name="detail">，那么 v-enter-from 会替换为 detail-enter-from

## animation和transition混用时：

```javascript
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
```

## Vue的transition组件中的mode属性：

```javascript
<template>
<!-- 
    transform动画机制默认是进入和离开同时进行，
    所以当两个元素在同一个地方进行显示切换时，
    会出现同时出现的情况
    使用mode属性可以设置元素进入和离开的先后顺序
-->
    <div>
        <button @click="shiftConten">切换内容</button>
    </div>
    <!-- <transition name="modeExp">  -->
    <!-- <transition name="modeExp" mode="in-out">  -->
    <transition name="modeExp" mode="out-in"> 
        <p v-if="content">11111111</p>
        <p v-else-if="!content">22222222</p>
    </transition>
</template>

<script setup>
    import { ref } from 'vue'
    let content = ref(true)
    function shiftConten() {
        content.value = !content.value
    }
</script>

<style scoped>
.modeExp-enter-from,
.modeExp-leave-to {
    opacity: 0;
}
.modeExp-enter-active,
.modeExp-leave-active {
    transition: opacity .5s ease;
}
</style>
```

## 结合第三方库使用：

### （1）AnimationCss

#### 使用方式：

安装animation.css库：

```javascript
npm install animate.css
```

在main.js中导入animate.css

![image-20220213235641087](/Users/hujianguo/Library/Application Support/typora-user-images/image-20220213235641087.png)

代码编写方式：

方式一：直接使用animate库中定义的keyframes动画。

```javascript
<template>
<!-- 
animation官网：https://animate.style/
GitHub：https://github.com/animate-css/animate.css
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
```

![image-20220214110716496](/Users/hujianguo/Library/Application Support/typora-user-images/image-20220214110716496.png)



![image-20220214110801019](/Users/hujianguo/Library/Application Support/typora-user-images/image-20220214110801019.png)

方式二：直接使用animate库提供的类。

![image-20220214111411751](/Users/hujianguo/Library/Application Support/typora-user-images/image-20220214111411751.png)

![image-20220214111509308](/Users/hujianguo/Library/Application Support/typora-user-images/image-20220214111509308.png)



```javascript
<template>
<!-- 
animation官网：https://animate.style/
GitHub：https://github.com/animate-css/animate.css
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
</style>
```

### （2）gsap：

#### JavaScript钩子：

JavaScript钩子可以帮助我们监听动画执行到哪个阶段了。

```javascript
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
```

![image-20220214111631480](/Users/hujianguo/Library/Application Support/typora-user-images/image-20220214111631480.png)



单纯使用css来实现动画时，动画的参数（动画时长等）是固定的。

使用JavaScript来实现一些动画可以将动画参数设置成变量。

当我们希望使用JavaScript实现一些动画效果时，我们可以选择使用gsap库来完成。

gsap可以通过JavaScript为CSS属性、SVG、Canvas等设置动画，并且是浏览器兼容的。

#### gsap使用：

（1）安装

```
npm install gsap
```

（2）在页面中引入

![image-20220214123834740](/Users/hujianguo/Library/Application Support/typora-user-images/image-20220214123834740.png)

（3）编写代码

![image-20220214123910531](/Users/hujianguo/Library/Application Support/typora-user-images/image-20220214123910531.png)



```javascript
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
```

#### 注意：

（1）当使用JavaScript来执行过渡动画时，在 enter 和 leave 钩子中必须使用 done 进行回调。否则，它们将被同步调用，过渡会立即完成。

![image-20220214130532484](/Users/hujianguo/Library/Application Support/typora-user-images/image-20220214130532484.png)

（2）添加 :css="false" 也会让 Vue 会跳过 CSS 的检测，除了性能略高之外，这也可以避免过渡过程中受到 CSS 规则的意外影响。

![image-20220214130615240](/Users/hujianguo/Library/Application Support/typora-user-images/image-20220214130615240.png)









# 4.项目应用

## （1）弹框

## （2）路由切换

## （3）状态过渡

双子洗衣机运行区域状态显示切换，

启动暂停按钮切换

水电管理数字上涨



## （4）列表过渡

程序卡片显示

云程序删除

云程序分类切换

## （5）进度条

云程序下载