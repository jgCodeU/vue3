
// 存储当前执行的副作用函数
let activeEffect = null 
// 存储所有的依赖关系
let bucket = new WeakMap()
// 原始数据
const data = {
    name: 'reactiveSystem',
    data: 20220508
}
// 代理原始数据
const obj = new Proxy(data, {
    get(target, key) {
        // 将activeEffect添加到set中
        track(target, key)
        // 返回属性值
        return target[key]
    },
    set(target, key, newValue) {
        // 设置属性值
        target[key] = newValue
        // 执行set中的副作用函数
        trigger(target, key)
    }
})
// track追踪变化
function track(target, key) {
    // 当前执行的activeEffect为空时，直接返回
    if(!activeEffect) return
    // 取出对象对应的依赖关系
    let depsMap = bucket.get(target)
    if(!depsMap) {
        depsMap = new Map()
        bucket.set(target, depsMap)
    }
    // 取出属性对应的依赖关系
    let deps = depsMap.get(key)
    if(!deps) {
        deps = new Set()
        depsMap.set(key, deps)
    }
    // 修改属性的依赖关系
    deps.add(activeEffect)
}

// trigger执行set中的副作用函数
