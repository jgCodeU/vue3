<template>
    <div class="tabControl">
        <!-- <h4 class="tab">{{arg1}}</h4>
        <h4 class="tab">{{arg2}}</h4>
        <h4 class="tab">{{arg3}}</h4> -->
        <div class="tab" :class="{color : index === selectIndex}" v-for="(item, index) in titles" @click="select(index)" :key="index">
            {{item}}
        </div>
    </div>
</template>

<script>
    export default {
        props:[
            "arg1",
            "arg2",
            "arg3",
            "titles"
        ],
        emits: [
            "changeContent"
        ],
        data() {
            return {
                selectIndex:0,
            }
        },
        methods: {
            select(param) {
                this.selectIndex = param;
                this.$emit("changeContent", this.selectIndex)
            }
        }
        
    }
</script>

<style scoped>
.tabControl {
    display: flex;
    justify-content: space-around;
}
.tab {
    /* width: 50px; */
    height: 20px;
    
}
.color {
    color: red;
    background-color: pink;
}
</style>