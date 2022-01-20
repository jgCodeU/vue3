function tool_1() {
    console.log('tool_1函数')
}
console.log('执行tool-1')
// 注意：耗时长的任务不会一直占用主线程
let tool_1_data1
setTimeout(() => {
    console.log('延时执行tool-1的内容')
    tool_1_data1 = '延时后赋值'
},3000)
Promise.resolve('tool-1-Promise').then((res) => {
    console.log(res)
})
export { 
    tool_1,
    tool_1_data1
}