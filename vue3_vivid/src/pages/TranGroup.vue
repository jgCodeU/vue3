<template>
<!-- 
    注意：
    （1）在行内元素上添加动画，一些动画效果不会生效，需要将行内元素转换为行内块元素。 
    （2）删除元素时，由于被删除元素时缓慢消失的，
        消失过程中，被删除元素仍然占据着位置，
        其他元素的移动会在被删除元素彻底消失后一次性移动到位，所以不会有过渡效果。
        此时需要在消失过程中将元素变为绝对定位，释放被删除元素所占据的位置。
 -->
    <div>
        transition-group(列表过渡)
    </div>
    <button @click="add">add</button>
    <button @click="removeNum">remove</button>
    <button @click="shuffleNum">重新排序</button>
    <transition-group name="list" tag="div">
        <div v-for="item in items" :key="item" class="numberItem">
            {{item}}
        </div>
    </transition-group>
</template>

<script setup>
    import {ref} from "vue"
    import _ from 'lodash';

    let items = ref([1,2,3,4,5,6])
    function randomIndex() {
        return Math.floor(Math.random() * items.value.length)
    }
    function add() {
        items.value.push(items.value.length + 1)
    }
    function removeNum() {
        items.value.splice(randomIndex(), 1)
    }
    function shuffleNum() {
        items.value = _.shuffle(items.value);
    }
</script>

<style scoped>
.numberItem {
    display: inline-block;
    margin: 5px;
}
.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
.list-enter-to,
.list-leave-from {
    transition: all 1s ease;
}
.list-move {
    transition: transform 1s ease;
}
.list-leave-active {
    position: absolute;
}
</style>