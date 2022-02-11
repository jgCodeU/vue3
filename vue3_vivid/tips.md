# 1.transition

4个属性

transition-property：指定应用过渡属性的名称，默认none（none、all、IDENT）。

transition-duration：过渡持续时间默认0s（单位：s、ms）。

transition-timing-function：过渡过程应用的函数。

transition-delay：规定了在过渡效果开始作用之前需要等待的时间。

具体用法：在元素初始状态时，写上transition的各个属性，当元素的某个样式变化时，根据transition展示过渡效果

参考资料：https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition



# 2.animation

animation: name duration timing-function delay iteration-count direction fill-mode;

animation-name：动画名称，代表一个由@keyframes定义的动画序列

animation-duration：动画持续时间，单位为秒或者毫秒

animation-timing-function：定义CSS动画在每一动画周期中执行的节奏

animation-delay：动画应用到元素上后到开始执行前的时间（定义一个负值会让动画立即开始。但是动画会从它的动画序列中某位置开始。例如，如果设定值为-1s，动画会从它的动画序列的第1秒位置处立即开始。）

animation-iteration-count：动画播放次数（如果指定了多个值，每次播放动画时，将使用列表中的下一个值，在使用最后一个值后循环回第一个值。）

animation-direction：动画播放顺序（normal、alternate、reverse、alternate- reverse）

animation-fill-mode：

animation-play-state：标志一个动画处于暂停或者运行中（paused、running）



@keyframe：定义动画序列中的关键帧，控制动画的变换（中间步骤）。每个 `@keyframes` 规则包含多个关键帧，也就是一段样式块语句，每个关键帧有一个百分比值作为名称，代表在动画进行中，在哪个阶段触发这个帧所包含的样式。



特点：可定义元素变化过程中的多个中间状态，方便实现动画的连续播放，使用加灵活。

# 3.transform

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