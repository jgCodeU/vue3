// import

export function initStatus(vm) {
    const options = vm.$options

    // 处理props
    if(options.props) {
        initProps(vm)
    }
    // 处理methods
    if(options.methods){
        initMethods(vm)
    }
    // 处理data
    if(options.data) {
        initData(vm)
    }
    // 处理computed
    if(options.computed) {
        initComputed(vm)
    }
    // 处理watch 
    if(options.watch) {
        initWatch(vm)
    }
}

function initData(vm) {
    let data = vm.$options.data

    data = vm._data = typeof data === "function" ? data.call(vm) : (data || {})
}